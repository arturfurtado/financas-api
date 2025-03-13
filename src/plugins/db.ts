import pg from 'pg'
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg

const pool = new Pool({
  host: process.env.POSTGRES_HOST || 'localhost',
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DB || 'financas_db',
  port: parseInt(process.env.POSTGRES_PORT || '5433', 10)
})

export default pool;
