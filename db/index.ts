import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DRIZZLE_DATABASE_URL!,
});
const db = drizzle(pool);

export default db;
