import { readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";
import process from "node:process";
import pg from "pg";

const { Pool } = pg;

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error("DATABASE_URL is not defined");
  const pool = new Pool({ connectionString });
  try {
    const dbDir = resolve(process.cwd(), "db");
    await pool.query(await readFile(resolve(dbDir, "init.sql"), "utf8"));
    const migrationDir = resolve(dbDir, "migrations");
    const migrations = (await readdir(migrationDir)).filter((name) => name.endsWith(".sql")).sort();
    for (const migration of migrations) {
      const migrationSql = await readFile(resolve(migrationDir, migration), "utf8");
      await pool.query(migrationSql);
    }
    console.log("Database migration completed successfully.");
  } finally {
    await pool.end();
  }
}

main().catch((error) => {
  console.error("Database migration failed:", error);
  process.exit(1);
});
