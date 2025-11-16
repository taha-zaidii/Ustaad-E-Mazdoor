// lib/db.ts

// 1. Import QueryResultRow
import { Pool, QueryResult, QueryResultRow } from "pg";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing from environment variables.");
}

const globalForPool = global as unknown as { pool: Pool | undefined };

export const pool =
  globalForPool.pool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPool.pool = pool;
}

// 2. Add the constraint 'extends QueryResultRow' to T
//    (You can also add '= any' as a default)
export async function query<T extends QueryResultRow = any>(
  text: string,
  params?: any[]
): Promise<QueryResult<T>> {
  const client = await pool.connect();
  try {
    // This will now work, as T is constrained
    const res = await client.query<T>(text, params);
    return res;
  } catch (err) {
    console.error(`[DB ERROR]`, err);
    throw err;
  } finally {
    client.release();
  }
}
