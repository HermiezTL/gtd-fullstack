import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: 'postgres://gtd:gtd@localhost:5432/gtd',
});

export default pool;