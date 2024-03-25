
import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
    host: 'localhost',
    port: 5432, // 默认PostgreSQL端口号
    user: 'postgres',
    password: '202321',
    database: 'Map'
});

