import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { authorizeOperatorRead, operatorTokenFromRequest } from "@/lib/operator-auth";
import { buildObservabilitySnapshot } from "@/lib/observability-summary";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const access = authorizeOperatorRead(process.env.LEADS_DASH_TOKEN?.trim() || null, operatorTokenFromRequest(request));
  if (!access.ok) {
    const error = access.status === 503 ? "Observabilidade administrativa indisponível" : "Não autorizado";
    return NextResponse.json({ success: false, error }, { status: access.status });
  }

  try {
    const [leads, attribution, events, recent] = await Promise.all([
      query("SELECT status::text AS bucket, COUNT(*)::int AS total FROM leads GROUP BY status ORDER BY total DESC"),
      query(`SELECT COALESCE(NULLIF(utm_source,''),'direto/não identificado') AS source,
                    COALESCE(NULLIF(utm_medium,''),'não identificado') AS medium,
                    COALESCE(NULLIF(utm_campaign,''),'não identificado') AS campaign,
                    COUNT(*)::int AS total
             FROM leads GROUP BY 1,2,3 ORDER BY total DESC LIMIT 30`),
      query("SELECT tipo AS type, COUNT(*)::int AS total FROM lead_events WHERE created_at >= NOW() - INTERVAL '30 days' GROUP BY tipo ORDER BY total DESC"),
      query("SELECT date_trunc('hour', created_at)::text AS hour, COUNT(*)::int AS total FROM leads WHERE created_at >= NOW() - INTERVAL '24 hours' GROUP BY 1 ORDER BY 1 ASC"),
    ]);
    return NextResponse.json({ success: true, snapshot: buildObservabilitySnapshot({
      leads: leads.rows, attribution: attribution.rows, events: events.rows, recent: recent.rows,
    }) });
  } catch (error) {
    console.error("[GET /api/observability]", error);
    return NextResponse.json({ success: false, error: "Falha ao carregar agregados de observabilidade" }, { status: 500 });
  }
}
