import test from "node:test";
import assert from "node:assert/strict";
import { buildObservabilitySnapshot } from "../lib/observability-summary.js";

test("expõe apenas agregados e nunca PII no snapshot", () => {
  const snapshot = buildObservabilitySnapshot({
    leads: [{ bucket: "novo", total: 2 }],
    attribution: [{ source: "google", medium: "cpc", campaign: "jul", total: 2 }],
    events: [{ type: "site_telemetry", total: 8 }],
    recent: [{ hour: "2026-07-28T12:00:00.000Z", total: 3 }],
  });
  assert.deepEqual(snapshot.leadsByStage, [{ stage: "novo", total: 2 }]);
  assert.equal(snapshot.attribution[0].source, "google");
  assert.equal(JSON.stringify(snapshot).match(/email|whatsapp|nome/i), null);
});
