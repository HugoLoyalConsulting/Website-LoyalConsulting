import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import process from "node:process";
import pg from "pg";

const { Pool } = pg;

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not defined");
  }

  const pool = new Pool({ connectionString });

  try {
    const sqlPath = resolve(process.cwd(), "db", "init.sql");
    const sql = await readFile(sqlPath, "utf8");
    await pool.query(sql);
    console.log("Database migration completed successfully.");
  } finally {
    await pool.end();
  }
}

main().catch((error) => {
  console.error("Database migration failed:", error);
  process.exit(1);
});
