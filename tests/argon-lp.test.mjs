import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("Argon landing page keeps confirmed claims, quote CTA and a no-fabrication notice", async () => {
  const page = await readFile(new URL("../app/(pt)/argon/page.tsx", import.meta.url), "utf8");
  const form = await readFile(new URL("../components/ArgonQuoteForm.tsx", import.meta.url), "utf8");
  assert.match(page, /Comunicação visual personalizada/);
  assert.match(page, /Desde 1987/);
  assert.match(page, /Solicitar orçamento/);
  assert.match(page, /Não inventamos depoimentos/);
  assert.match(page, /ArgonQuoteForm/);
  assert.match(form, /Formulário ainda não está conectado/);
  assert.match(form, /Falar no WhatsApp/);
});

test("Argon database migration isolates quote requests by tenant", async () => {
  const sql = await readFile(new URL("../db/migrations/001_argon_quote_requests.sql", import.meta.url), "utf8");
  assert.match(sql, /CREATE TABLE IF NOT EXISTS argon_quote_requests/);
  assert.match(sql, /tenant_id TEXT NOT NULL DEFAULT 'argon-bras'/);
  assert.match(sql, /consent_version TEXT NOT NULL/);
  assert.match(sql, /TIMESTAMPTZ NOT NULL DEFAULT NOW\(\)/);
});
