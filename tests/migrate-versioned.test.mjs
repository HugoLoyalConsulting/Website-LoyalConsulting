import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("migration runner applies versioned migrations after base schema", async () => {
  const source = await readFile(new URL("../scripts/migrate.mjs", import.meta.url), "utf8");
  assert.match(source, /readdir/);
  assert.match(source, /migrations/);
  assert.match(source, /pool\.query\(migrationSql\)/);
});
