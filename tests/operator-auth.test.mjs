import test from "node:test";
import assert from "node:assert/strict";
import { authorizeOperatorRead } from "../lib/operator-auth.js";

test("recusa leitura quando token de operador não está configurado", () => {
  assert.deepEqual(authorizeOperatorRead(null, "qualquer"), { ok: false, status: 503 });
});

test("recusa token ausente ou incorreto", () => {
  assert.deepEqual(authorizeOperatorRead("segredo", ""), { ok: false, status: 401 });
  assert.deepEqual(authorizeOperatorRead("segredo", "errado"), { ok: false, status: 401 });
});

test("aceita somente token exato", () => {
  assert.deepEqual(authorizeOperatorRead("segredo", "segredo"), { ok: true, status: 200 });
});
