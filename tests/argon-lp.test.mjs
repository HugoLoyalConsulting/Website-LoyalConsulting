import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("Argon landing page keeps confirmed claims, quote CTA and a no-fabrication notice", async () => {
  const page = await readFile(new URL("../app/(pt)/argon/page.tsx", import.meta.url), "utf8");
  const form = await readFile(new URL("../components/ArgonQuoteForm.tsx", import.meta.url), "utf8");
  assert.match(page, /Comunicação visual personalizada/);
  assert.match(page, /Desde 1987/);
  assert.match(page, /Solicitar orçamento/);
  assert.match(page, /Experiência para conversar/);
  assert.match(page, /ArgonQuoteForm/);
  assert.match(page, /argon-gallery-track/);
  assert.match(page, /argon-gallery-item/);
  assert.match(form, /Abrimos o WhatsApp com suas informações/);
  assert.match(page, /5511972070323/);
  assert.match(page, /Dores que resolvemos/);
  assert.match(page, /Mapa do site/);
  assert.match(page, /HTTPS/);
  assert.match(page, /argon-sitemap/);
  assert.match(page, /argon-whatsapp-float/);
  assert.match(form, /checkbox/);
  assert.match(form, /name="services"/);
  assert.match(form, /serviceLabels/);
  assert.ok(page.indexOf("Várzea Paulista") > page.indexOf("<footer"), "city must only appear in footer");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /--argon-ink/);
  assert.match(css, /--argon-type-display/);
});

test("Argon database migration isolates quote requests by tenant", async () => {
  const sql = await readFile(new URL("../db/migrations/001_argon_quote_requests.sql", import.meta.url), "utf8");
  assert.match(sql, /CREATE TABLE IF NOT EXISTS argon_quote_requests/);
  assert.match(sql, /tenant_id TEXT NOT NULL DEFAULT 'argon-bras'/);
  assert.match(sql, /consent_version TEXT NOT NULL/);
  assert.match(sql, /TIMESTAMPTZ NOT NULL DEFAULT NOW\(\)/);
});
