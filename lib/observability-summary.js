const clean = (value) => String(value || "").trim() || "não identificado";
const count = (value) => Math.max(0, Number(value || 0));

/** Converts aggregate database rows into a deliberately PII-free observability contract. */
export function buildObservabilitySnapshot({ leads = [], attribution = [], events = [], recent = [] }) {
  return {
    generatedAt: new Date().toISOString(),
    leadsByStage: leads.map((row) => ({ stage: clean(row.bucket), total: count(row.total) })),
    attribution: attribution.map((row) => ({
      source: clean(row.source), medium: clean(row.medium), campaign: clean(row.campaign), total: count(row.total),
    })),
    events: events.map((row) => ({ type: clean(row.type), total: count(row.total) })),
    recent: recent.map((row) => ({ hour: clean(row.hour), total: count(row.total) })),
    piiPolicy: "Agregados somente; nenhum identificador pessoal é retornado.",
  };
}
