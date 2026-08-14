import test from "node:test";
import assert from "node:assert/strict";
import { argonFunnelContract, validateArgonFunnelContract } from "../lib/argon-funnel.js";

test("Argon funnel contract separates confirmed evidence from hypotheses", () => {
  const contract = argonFunnelContract();
  assert.equal(contract.company.id, "argon-bras");
  assert.equal(contract.primaryConversion, "quote_request");
  assert.equal(contract.publishStatus, "draft_not_published");
  assert.equal(contract.tracking.status, "NOT_INSTRUMENTED");
  assert.equal(contract.proof.status, "UNVERIFIED");
  assert.deepEqual(validateArgonFunnelContract(contract), []);
});

test("Argon funnel contract rejects fabricated proof and unsafe publication", () => {
  const contract = argonFunnelContract();
  contract.proof = { status: "VERIFIED", items: [{ claim: "fabricated testimonial", evidenceUrl: "" }] };
  contract.publishStatus = "published";
  assert.deepEqual(validateArgonFunnelContract(contract), [
    "proof_requires_evidence_url",
    "publication_requires_human_approval",
  ]);
});
