import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { applyRateLimit } from "@/lib/rate-limit";
import { query } from "@/lib/db";
import { sanitizeText } from "@/lib/sanitization";

export const dynamic = "force-static";

const requestSchema = z.object({
  name: z.string().trim().min(2).max(160),
  company: z.string().trim().max(160).optional().default(""),
  contact: z.string().trim().min(5).max(200),
  project: z.string().trim().min(10).max(3000),
  consent: z.literal("on"),
  consentVersion: z.string().trim().min(1).max(80),
});

function cors(request: NextRequest, response: NextResponse) {
  const origin = request.headers.get("origin");
  const allowed = (process.env.ARGON_ALLOWED_ORIGINS || process.env.ALLOWED_ORIGINS || "").split(",").map((item) => item.trim());
  if (origin && allowed.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set("Vary", "Origin");
  }
  response.headers.set("Access-Control-Allow-Methods", "POST,OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}

export async function OPTIONS(request: NextRequest) {
  return cors(request, new NextResponse(null, { status: 204 }));
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const limit = applyRateLimit(`argon:${ip}`, Number(process.env.RATE_LIMIT_MAX || "10"), Number(process.env.RATE_LIMIT_WINDOW_MS || "60000"));
  if (!limit.allowed) return cors(request, NextResponse.json({ success: false, error: "Muitas tentativas. Tente novamente." }, { status: 429 }));

  let body: unknown;
  try { body = await request.json(); } catch { return cors(request, NextResponse.json({ success: false, error: "Payload inválido." }, { status: 400 })); }
  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) return cors(request, NextResponse.json({ success: false, error: "Dados inválidos." }, { status: 400 }));

  const data = parsed.data;
  try {
    const inserted = await query<{ id: number }>(
      "INSERT INTO argon_quote_requests (name, company, contact, project, consent, consent_version) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id",
      [sanitizeText(data.name), sanitizeText(data.company), sanitizeText(data.contact), sanitizeText(data.project), true, sanitizeText(data.consentVersion)]
    );
    return cors(request, NextResponse.json({ success: true, id: inserted.rows[0]?.id }, { status: 201 }));
  } catch (error) {
    console.error("[POST /api/argon/leads]", error);
    return cors(request, NextResponse.json({ success: false, error: "Falha ao salvar pedido." }, { status: 500 }));
  }
}
