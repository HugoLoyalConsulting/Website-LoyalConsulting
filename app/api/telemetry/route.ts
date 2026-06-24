import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { sanitizeText } from "@/lib/sanitization";

export const dynamic = "force-static";

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
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, X-Telemetry-Token");
  return response;
}

function hasDashboardAccess(request: NextRequest) {
  const token = process.env.TELEMETRY_DASH_TOKEN?.trim();
  if (!token) return true;

  const authToken = request.headers.get("x-telemetry-token") || "";
  const queryToken = new URL(request.url).searchParams.get("token") || "";
  return authToken === token || queryToken === token;
}

export async function OPTIONS(request: NextRequest) {
  return withCorsHeaders(request, new NextResponse(null, { status: 204 }));
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as Record<string, unknown>;
    const event = sanitizeText(String(payload.event || "")).slice(0, 60) || "page_view";
    const path = sanitizeText(String(payload.path || "")).slice(0, 240);
    const referrer = sanitizeText(String(payload.referrer || "")).slice(0, 300);
    const viewport = sanitizeText(String(payload.viewport || "")).slice(0, 40);
    const sessionId = sanitizeText(String(payload.sessionId || "")).slice(0, 120);
    const scrollDepth = Number(payload.scrollDepth || 0);
    const readTimeSec = Number(payload.readTimeSec || 0);

    const safePayload = {
      event,
      path,
      referrer,
      viewport,
      sessionId,
      scrollDepth: Number.isFinite(scrollDepth) ? scrollDepth : 0,
      readTimeSec: Number.isFinite(readTimeSec) ? readTimeSec : 0,
      userAgent: request.headers.get("user-agent") || "",
      ts: sanitizeText(String(payload.ts || new Date().toISOString())).slice(0, 80),
    };

    await query(
      "INSERT INTO lead_events (lead_id, tipo, origem, payload) VALUES (NULL, $1, 'site', $2::jsonb)",
      ["site_telemetry", JSON.stringify(safePayload)]
    );

    return withCorsHeaders(request, NextResponse.json({ success: true }, { status: 201 }));
  } catch (error) {
    console.error("[POST /api/telemetry]", error);
    return withCorsHeaders(
      request,
      NextResponse.json({ success: false, error: "Falha ao registrar telemetria" }, { status: 500 })
    );
  }
}

export async function GET(request: NextRequest) {
  if (!hasDashboardAccess(request)) {
    return withCorsHeaders(
      request,
      NextResponse.json({ success: false, error: "Nao autorizado" }, { status: 401 })
    );
  }

  try {
    const summary = await query<{
      page_views: number;
      page_exits: number;
      unique_sessions: number;
      avg_scroll: string;
      avg_read_time: string;
    }>(
      `
      SELECT
        COUNT(*) FILTER (WHERE payload->>'event' = 'page_view')::int AS page_views,
        COUNT(*) FILTER (WHERE payload->>'event' = 'page_exit')::int AS page_exits,
        COUNT(DISTINCT NULLIF(payload->>'sessionId', ''))::int AS unique_sessions,
        COALESCE(ROUND(AVG(NULLIF((payload->>'scrollDepth')::numeric, 0)), 2), 0)::text AS avg_scroll,
        COALESCE(ROUND(AVG(NULLIF((payload->>'readTimeSec')::numeric, 0)), 2), 0)::text AS avg_read_time
      FROM lead_events
      WHERE tipo = 'site_telemetry'
      `
    );

    const latest = await query(
      `
      SELECT
        created_at,
        payload->>'event' AS event,
        payload->>'path' AS path,
        payload->>'scrollDepth' AS scroll_depth,
        payload->>'readTimeSec' AS read_time_sec,
        payload->>'viewport' AS viewport
      FROM lead_events
      WHERE tipo = 'site_telemetry'
      ORDER BY created_at DESC
      LIMIT 200
      `
    );

    return withCorsHeaders(
      request,
      NextResponse.json({
        success: true,
        summary: summary.rows[0] || {
          page_views: 0,
          page_exits: 0,
          unique_sessions: 0,
          avg_scroll: "0",
          avg_read_time: "0",
        },
        events: latest.rows,
      })
    );
  } catch (error) {
    console.error("[GET /api/telemetry]", error);
    return withCorsHeaders(
      request,
      NextResponse.json({ success: false, error: "Falha ao carregar telemetria" }, { status: 500 })
    );
  }
}
