const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config({ path: './src/config/.env' });

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  connectionLimit: process.env.DB_CONNECTION,
  port: process.env.DB_PORT
});

module.exports = pool;