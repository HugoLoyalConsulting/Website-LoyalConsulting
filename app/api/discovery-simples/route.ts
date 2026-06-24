import { NextRequest, NextResponse } from "next/server";
import { applyRateLimit } from "@/lib/rate-limit";
import { sanitizeText, sanitizePhone } from "@/lib/sanitization";
import { query } from "@/lib/db";
import { sendNotificationEmail } from "@/lib/email";

export const dynamic = "force-static";

function getIp(req: NextRequest) {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: { "Access-Control-Allow-Methods": "POST,OPTIONS", "Access-Control-Allow-Headers": "Content-Type" },
  });
}

export async function POST(request: NextRequest) {
  const limit = applyRateLimit(getIp(request), Number(process.env.RATE_LIMIT_MAX || "10"), 60000);
  if (!limit.allowed) return NextResponse.json({ success: false }, { status: 429 });

  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({ success: false }, { status: 400 }); }

  if (!body || typeof body !== "object") return NextResponse.json({ success: false }, { status: 400 });
  const b = body as Record<string, unknown>;

  const nome         = sanitizeText(String(b.nomeCompleto   || ""));
  const departamento = sanitizeText(String(b.departamento   || ""));
  const empresa      = sanitizeText(String(b.empresa        || "")) || null;
  const email        = sanitizeText(String(b.email          || "")).toLowerCase() || null;
  const whatsapp     = sanitizePhone(String(b.whatsapp      || "")) || null;
  const metricas     = sanitizeText(String(b.metricas       || ""));
  const fontesDados  = sanitizeText(String(b.fontesDados    || ""));
  const quemConsolida = sanitizeText(String(b.quemConsolida || ""));
  const comoAgir     = sanitizeText(String(b.comoAgir       || "")) || null;
  const variant      = String(b.variant || "A") === "B" ? "B" : "A";
  const utmSource    = sanitizeText(String(b.utmSource   || "")) || null;
  const utmMedium    = sanitizeText(String(b.utmMedium   || "")) || null;
  const utmCampaign  = sanitizeText(String(b.utmCampaign || "")) || null;
  const utmTerm      = sanitizeText(String(b.utmTerm     || "")) || null;
  const utmContent   = sanitizeText(String(b.utmContent  || "")) || null;

  if (!nome || nome.length < 2) return NextResponse.json({ success: false, error: "Nome obrigatório" }, { status: 400 });
  if (!departamento) return NextResponse.json({ success: false, error: "Departamento obrigatório" }, { status: 400 });
  if (!metricas) return NextResponse.json({ success: false, error: "Métricas obrigatórias" }, { status: 400 });
  if (!fontesDados) return NextResponse.json({ success: false, error: "Fontes de dados obrigatórias" }, { status: 400 });
  if (!quemConsolida) return NextResponse.json({ success: false, error: "Campo 'quem consolida' obrigatório" }, { status: 400 });

  try {
    const inserted = await query<{ id: number }>(
      `INSERT INTO discovery_responses
         (nome, departamento, empresa, email, whatsapp,
          metricas, fontes_dados, quem_consolida, como_agir,
          variant, utm_source, utm_medium, utm_campaign, utm_term, utm_content)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)
       RETURNING id`,
      [nome, departamento, empresa, email, whatsapp,
       metricas, fontesDados, quemConsolida, comoAgir,
       variant, utmSource, utmMedium, utmCampaign, utmTerm, utmContent]
    );

    sendNotificationEmail(
      `[Loyal] Novo Discovery — ${nome}${empresa ? ` · ${empresa}` : ""}`,
      `<h2>Novo Formulário de Discovery</h2>
       <table border="1" cellpadding="8" style="border-collapse:collapse">
         <tr><td><strong>Nome</strong></td><td>${nome}</td></tr>
         <tr><td><strong>Departamento</strong></td><td>${departamento}</td></tr>
         <tr><td><strong>Empresa</strong></td><td>${empresa || "—"}</td></tr>
         <tr><td><strong>E-mail</strong></td><td>${email || "—"}</td></tr>
         <tr><td><strong>WhatsApp</strong></td><td>${whatsapp || "—"}</td></tr>
         <tr><td><strong>Variante A/B</strong></td><td>${variant}</td></tr>
         <tr><td><strong>Métricas que acompanha</strong></td><td>${metricas}</td></tr>
         <tr><td><strong>De onde vêm os dados</strong></td><td>${fontesDados}</td></tr>
         <tr><td><strong>Quem consolida</strong></td><td>${quemConsolida}</td></tr>
         <tr><td><strong>Como pode agir</strong></td><td>${comoAgir || "—"}</td></tr>
       </table>`
    );

    return NextResponse.json({ success: true, id: inserted.rows[0]?.id }, { status: 201 });
  } catch (error) {
    console.error("[POST /api/discovery-simples]", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
