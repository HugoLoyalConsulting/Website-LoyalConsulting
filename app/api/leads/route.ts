import { NextRequest, NextResponse } from "next/server";
import { applyRateLimit } from "@/lib/rate-limit";
import { sanitizePhone, sanitizeText } from "@/lib/sanitization";
import { query } from "@/lib/db";
import { forwardLeadToHubSpot } from "@/lib/integrations";
import { leadSchema } from "@/lib/validations";
import type { LeadStatus } from "@/lib/types";
import { sendNotificationEmail } from "@/lib/email";

const ALLOWED_STATUSES: LeadStatus[] = [
  "novo",
  "contatar",
  "qualificado",
  "proposta",
  "ganho",
  "perdido"
];

async function notifyCrm(lead: Record<string, unknown>) {
  const crmWebhookUrl = process.env.CRM_WEBHOOK_URL?.trim() || process.env.HUBSPOT_WEBHOOK_URL?.trim();
  if (!crmWebhookUrl) return;

  try {
    await fetch(crmWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.CRM_WEBHOOK_SECRET ? { "x-crm-webhook-secret": process.env.CRM_WEBHOOK_SECRET } : {})
      },
      body: JSON.stringify({ source: "loyal-site", type: "lead_created", lead }),
    });
  } catch (error) {
    console.error("[notifyCrm]", error);
  }
}

function getIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || "unknown";
}

function parseAllowedOrigins() {
  const value = process.env.ALLOWED_ORIGINS || process.env.APP_ORIGIN || "";
  return value
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

function withCorsHeaders(request: NextRequest, response: NextResponse) {
  const origin = request.headers.get("origin");
  const allowedOrigins = parseAllowedOrigins();

  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set("Vary", "Origin");
  }

  response.headers.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}

export async function OPTIONS(request: NextRequest) {
  return withCorsHeaders(request, new NextResponse(null, { status: 204 }));
}

export async function POST(request: NextRequest) {
  const rateLimitMax = Number(process.env.RATE_LIMIT_MAX || "10");
  const rateLimitWindowMs = Number(process.env.RATE_LIMIT_WINDOW_MS || "60000");
  const ip = getIp(request);

  const rateLimit = applyRateLimit(ip, rateLimitMax, rateLimitWindowMs);
  if (!rateLimit.allowed) {
    return withCorsHeaders(
      request,
      NextResponse.json({ success: false, error: "Muitas tentativas. Tente novamente." }, { status: 429 })
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return withCorsHeaders(
      request,
      NextResponse.json({ success: false, error: "Payload invalido" }, { status: 400 })
    );
  }

  const parsed = leadSchema.safeParse(payload);
  if (!parsed.success) {
    return withCorsHeaders(
      request,
      NextResponse.json(
        {
          success: false,
          error: "Dados invalidos",
          details: parsed.error.flatten()
        },
        { status: 400 }
      )
    );
  }

  const data = parsed.data;
  const cleanNome = sanitizeText(data.nome);
  const cleanSobrenome = sanitizeText(data.sobrenome || "");
  const cleanNomeCompleto = [cleanNome, cleanSobrenome].filter(Boolean).join(" ");
  const cleanSetor = sanitizeText(data.setor || "");
  const cleanAreaSetor = sanitizeText(data.area || data.areaSetor || "");
  const cleanCargo = sanitizeText(data.cargo || "");
  const cleanEmail = sanitizeText(data.email || "").toLowerCase();
  const cleanWhatsapp = sanitizePhone(data.whatsapp || "");
  const cleanDescricao = sanitizeText(data.dorDescricao || "");
  const cleanTamanhoEmpresa = sanitizeText(data.tamanhoEmpresa || "");
  const contactMode = data.preferredContactMode.map((item) => sanitizeText(item)).filter(Boolean);

  const cleanDores = data.dores.map((item) => sanitizeText(item)).filter(Boolean);
  const cleanTipoServico = data.tipoServico.map((item) => sanitizeText(item)).filter(Boolean);
  const cleanFontesDados = data.fontesDados.map((item) => sanitizeText(item)).filter(Boolean);
  const cleanOrigemDados = data.origemDados.map((item) => sanitizeText(item)).filter(Boolean);
  const cleanFerramentasBI = data.ferramentasBI.map((item) => sanitizeText(item)).filter(Boolean);
  const cleanFrequencia = sanitizeText(data.frequenciaAtualizacao || "");

  const cleanAcompanhamento = (data.acompanhamento ?? []).map((item) => sanitizeText(item)).filter(Boolean);
  const cleanIndicadores = sanitizeText(data.indicadores || "");

  const metadata = JSON.stringify({
    setor: cleanSetor,
    tipoServico: cleanTipoServico,
    fontesDados: cleanFontesDados,
    origemDados: cleanOrigemDados,
    ferramentasBI: cleanFerramentasBI,
    frequenciaAtualizacao: cleanFrequencia,
    acompanhamento: cleanAcompanhamento,
    indicadores: cleanIndicadores || null,
  });

  try {
    const duplicate = await query<{ id: number }>(
      `SELECT id FROM leads WHERE ($1::text <> '' AND LOWER(email) = LOWER($1)) OR ($2::text <> '' AND whatsapp = $2) LIMIT 1`,
      [cleanEmail, cleanWhatsapp]
    );

    if (duplicate.rowCount && duplicate.rowCount > 0) {
      return withCorsHeaders(
        request,
        NextResponse.json({ success: false, error: "Lead ja cadastrado" }, { status: 409 })
      );
    }

    const inserted = await query<{ id: number }>(
      `
      INSERT INTO leads (
        nome, area_setor, cargo, email, whatsapp, preferred_contact_mode,
        dores, dor_descricao, tamanho_empresa,
        origem, utm_source, utm_medium, utm_campaign, utm_term, utm_content,
        consentimento_lgpd, metadata
      ) VALUES (
        $1,$2,$3,$4,$5,$6,
        $7,$8,$9,
        'lp',$10,$11,$12,$13,$14,
        $15,$16::jsonb
      ) RETURNING id
      `,
      [
        cleanNomeCompleto,
        cleanAreaSetor || null,
        cleanCargo || null,
        cleanEmail || null,
        cleanWhatsapp || null,
        contactMode.join(", "),
        cleanDores,
        cleanDescricao || null,
        cleanTamanhoEmpresa || null,
        sanitizeText(data.utmSource || "") || null,
        sanitizeText(data.utmMedium || "") || null,
        sanitizeText(data.utmCampaign || "") || null,
        sanitizeText(data.utmTerm || "") || null,
        sanitizeText(data.utmContent || "") || null,
        data.consentimentoLgpd,
        metadata
      ]
    );

    const leadId = inserted.rows[0]?.id;

    await query(
      "INSERT INTO lead_events (lead_id, tipo, origem, payload) VALUES ($1, $2, 'lp', $3::jsonb)",
      [leadId, "lead_created", JSON.stringify({ preferredContactMode: contactMode })]
    );

    void notifyCrm({
      id: leadId,
      nome: cleanNomeCompleto,
      setor: cleanSetor,
      area: cleanAreaSetor,
      cargo: cleanCargo,
      email: cleanEmail,
      whatsapp: cleanWhatsapp,
      tamanhoEmpresa: cleanTamanhoEmpresa,
      dores: cleanDores,
      metadata: JSON.parse(metadata),
      origem: "lp",
      utmSource: sanitizeText(data.utmSource || "") || null,
      utmMedium: sanitizeText(data.utmMedium || "") || null,
      utmCampaign: sanitizeText(data.utmCampaign || "") || null,
      utmTerm: sanitizeText(data.utmTerm || "") || null,
      utmContent: sanitizeText(data.utmContent || "") || null,
      consentimentoLgpd: data.consentimentoLgpd,
    });

    void forwardLeadToHubSpot({
      nome: cleanNome,
      sobrenome: cleanSobrenome,
      email: cleanEmail,
      whatsapp: cleanWhatsapp,
      cargo: cleanCargo,
      area: cleanAreaSetor,
      tamanhoEmpresa: cleanTamanhoEmpresa,
      dores: cleanDores,
      tipoServico: cleanTipoServico,
      fontesDados: cleanFontesDados,
      origemDados: cleanOrigemDados,
      ferramentasBI: cleanFerramentasBI,
      frequenciaAtualizacao: cleanFrequencia,
      dorDescricao: cleanDescricao,
      utmSource: sanitizeText(data.utmSource || ""),
      utmMedium: sanitizeText(data.utmMedium || ""),
      utmCampaign: sanitizeText(data.utmCampaign || ""),
      utmTerm: sanitizeText(data.utmTerm || ""),
      utmContent: sanitizeText(data.utmContent || ""),
      hutk: sanitizeText(data.hutk || ""),
      pageUri: sanitizeText(data.pageUri || ""),
      pageName: sanitizeText(data.pageName || ""),
      consentimentoLgpd: data.consentimentoLgpd,
    });

    // Notificação por e-mail — fire-and-forget
    sendNotificationEmail(
      `[Loyal] Novo lead — ${cleanNomeCompleto || "Sem nome"} · ${cleanEmail || cleanWhatsapp || "sem contato"}`,
      `<h2>Novo Lead — Formulário de Contato</h2>
       <table>
         <tr><td><strong>Nome</strong></td><td>${cleanNomeCompleto || "—"}</td></tr>
         <tr><td><strong>E-mail</strong></td><td>${cleanEmail || "—"}</td></tr>
         <tr><td><strong>WhatsApp</strong></td><td>${cleanWhatsapp || "—"}</td></tr>
         <tr><td><strong>Cargo</strong></td><td>${cleanCargo || "—"}</td></tr>
         <tr><td><strong>Área / Setor</strong></td><td>${cleanAreaSetor || "—"}</td></tr>
         <tr><td><strong>Tamanho da empresa</strong></td><td>${cleanTamanhoEmpresa || "—"}</td></tr>
         <tr><td><strong>Dores</strong></td><td>${cleanDores.join(", ") || "—"}</td></tr>
         <tr><td><strong>Como acompanha a área</strong></td><td>${cleanAcompanhamento.join(", ") || "—"}</td></tr>
         <tr><td><strong>Indicadores que usa</strong></td><td>${cleanIndicadores || "—"}</td></tr>
         <tr><td><strong>Descrição</strong></td><td>${cleanDescricao || "—"}</td></tr>
       </table>`
    );

    return withCorsHeaders(request, NextResponse.json({ success: true, id: leadId }, { status: 201 }));
  } catch (error) {
    console.error("[POST /api/leads]", error);
    return withCorsHeaders(
      request,
      NextResponse.json({ success: false, error: "Falha ao salvar lead" }, { status: 500 })
    );
  }
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const status = url.searchParams.get("status");
  const page = Number(url.searchParams.get("page") || "1");
  const pageSize = Math.min(Number(url.searchParams.get("pageSize") || "20"), 100);
  const offset = (Math.max(page, 1) - 1) * Math.max(pageSize, 1);

  if (status && !ALLOWED_STATUSES.includes(status as LeadStatus)) {
    return withCorsHeaders(
      request,
      NextResponse.json({ success: false, error: "Status invalido" }, { status: 400 })
    );
  }

  try {
    const values: unknown[] = [pageSize, offset];
    const whereClause = status ? "WHERE status = $3" : "";
    if (status) {
      values.push(status);
    }

    const sql = `
      SELECT
        id, nome, empresa, area_setor, cargo, email, whatsapp,
        preferred_contact_mode, dores, dor_descricao,
        tamanho_empresa, urgencia,
        origem, utm_source, utm_medium, utm_campaign, utm_term, utm_content,
        consentimento_lgpd, status, score, created_at, updated_at
      FROM leads
      ${whereClause}
      ORDER BY created_at DESC
      LIMIT $1 OFFSET $2
    `;

    const rows = await query(sql, values);

    return withCorsHeaders(
      request,
      NextResponse.json({
        success: true,
        page,
        pageSize,
        count: rows.rowCount || 0,
        data: rows.rows
      })
    );
  } catch (error) {
    console.error("[GET /api/leads]", error);
    return withCorsHeaders(
      request,
      NextResponse.json({ success: false, error: "Falha ao listar leads" }, { status: 500 })
    );
  }
}
