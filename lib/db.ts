import { Pool, QueryResultRow } from "pg";

let pool: Pool | undefined;

function getPool(): Pool {
  if (pool) {
    return pool;
  }

  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not defined");
  }

  pool = new Pool({ connectionString });
  return pool;
}

export async function query<T extends QueryResultRow>(text: string, params: unknown[] = []) {
  return getPool().query<T>(text, params);
}
