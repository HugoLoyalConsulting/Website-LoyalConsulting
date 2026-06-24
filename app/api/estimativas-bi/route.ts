import { NextRequest, NextResponse } from "next/server";
import { applyRateLimit } from "@/lib/rate-limit";
import { sanitizeText } from "@/lib/sanitization";
import { query } from "@/lib/db";
import { sendNotificationEmail } from "@/lib/email";

export const dynamic = "force-static";

function getIp(request: NextRequest) {
  const fwd = request.headers.get("x-forwarded-for");
  return fwd?.split(",")[0]?.trim() || "unknown";
}

function parseAllowedOrigins() {
  return (process.env.ALLOWED_ORIGINS || process.env.APP_ORIGIN || "")
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean);
}

function withCors(request: NextRequest, response: NextResponse) {
  const origin = request.headers.get("origin");
  const allowed = parseAllowedOrigins();
  if (origin && allowed.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set("Vary", "Origin");
  }
  response.headers.set("Access-Control-Allow-Methods", "POST,OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}

export async function OPTIONS(request: NextRequest) {
  return withCors(request, new NextResponse(null, { status: 204 }));
}

export async function POST(request: NextRequest) {
  const ip = getIp(request);
  const limit = applyRateLimit(ip, Number(process.env.RATE_LIMIT_MAX || "10"), Number(process.env.RATE_LIMIT_WINDOW_MS || "60000"));
  if (!limit.allowed) {
    return withCors(request, NextResponse.json({ success: false }, { status: 429 }));
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return withCors(request, NextResponse.json({ success: false }, { status: 400 }));
  }

  if (!body || typeof body !== "object") {
    return withCors(request, NextResponse.json({ success: false }, { status: 400 }));
  }

  const b = body as Record<string, unknown>;
  const results = (b.results as Record<string, unknown>) || {};
  const complexity = (b.complexity as Record<string, unknown>) || {};
  const team = Array.isArray(b.team) ? b.team : [];

  const empresa    = sanitizeText(String(b.empresa || ""));
  const nome       = sanitizeText(String(b.nome    || ""));
  const email      = sanitizeText(String(b.email   || "")).toLowerCase();
  const fontes     = sanitizeText(String(complexity.fontes     || ""));
  const local      = Array.isArray(complexity.local) ? (complexity.local as string[]).join(", ") : String(complexity.local || "");
  const frequencia = sanitizeText(String(complexity.frequencia || ""));
  const divergem   = sanitizeText(String(complexity.divergem   || ""));
  const membros    = Number(results.membros)          || 0;
  const horasSemana = Number(results.totalHoras)      || 0;
  const horasAno   = Number(results.totalHorasAnuais) || 0;
  const custoAnual = Number(results.totalAnual)       || 0;
  const teamJson   = JSON.stringify(team);
  const leadSource  = sanitizeText(String(b.lead_source  || "calculadora_bi"));
  const utmSource   = sanitizeText(String(b.utm_source   || "")) || null;
  const utmMedium   = sanitizeText(String(b.utm_medium   || "")) || null;
  const utmCampaign = sanitizeText(String(b.utm_campaign || "")) || null;
  const utmTerm     = sanitizeText(String(b.utm_term     || "")) || null;
  const utmContent  = sanitizeText(String(b.utm_content  || "")) || null;

  try {
    const inserted = await query<{ id: number }>(
      `INSERT INTO estimativas_bi
         (empresa, nome, email, fontes, local, frequencia, divergem,
          membros, horas_semana, horas_ano, custo_anual, team,
          lead_source, utm_source, utm_medium, utm_campaign, utm_term, utm_content)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12::jsonb,$13,$14,$15,$16,$17,$18)
       RETURNING id`,
      [empresa, nome, email, fontes, local, frequencia, divergem,
       membros, horasSemana, horasAno, custoAnual, teamJson,
       leadSource, utmSource, utmMedium, utmCampaign, utmTerm, utmContent]
    );

    // HubSpot: fire-and-forget via env vars — mesmo mecanismo do /api/leads
    const crmUrl = process.env.CRM_WEBHOOK_URL?.trim() || process.env.HUBSPOT_WEBHOOK_URL?.trim();
    if (crmUrl) {
      fetch(crmUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "calculadora-bi",
          type: "estimativa_created",
          lead: { empresa, nome, email, fontes, local, frequencia, divergem, membros, horasSemana, horasAno, custoAnual },
        }),
      }).catch(() => {});
    }

    // Notificação por e-mail — fire-and-forget
    const custoFmt = custoAnual.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
    sendNotificationEmail(
      `[Loyal] Nova estimativa de BI — ${empresa || "Empresa não informada"} · ${custoFmt}/ano`,
      `<h2>Nova Estimativa de Economias em BI</h2>
       <table>
         <tr><td><strong>Empresa</strong></td><td>${empresa || "—"}</td></tr>
         <tr><td><strong>Nome</strong></td><td>${nome || "—"}</td></tr>
         <tr><td><strong>E-mail</strong></td><td>${email || "—"}</td></tr>
         <tr><td><strong>Custo anual estimado</strong></td><td>${custoFmt}</td></tr>
         <tr><td><strong>Membros da equipe</strong></td><td>${membros}</td></tr>
         <tr><td><strong>Horas/semana</strong></td><td>${horasSemana}</td></tr>
         <tr><td><strong>Fontes de dados</strong></td><td>${fontes}</td></tr>
         <tr><td><strong>Onde armazenam</strong></td><td>${local}</td></tr>
         <tr><td><strong>Frequência</strong></td><td>${frequencia}</td></tr>
         <tr><td><strong>Divergências</strong></td><td>${divergem}</td></tr>
       </table>`
    );

    return withCors(request, NextResponse.json({ success: true, id: inserted.rows[0]?.id }, { status: 201 }));
  } catch (error) {
    console.error("[POST /api/estimativas-bi]", error);
    return withCors(request, NextResponse.json({ success: false }, { status: 500 }));
  }
}
