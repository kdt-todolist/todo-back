const pool = require("../config/db");
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("Successfully connected to the database!");

    const [rows] = await connection.query("SELECT * FROM users");
    console.log("Query result:", rows);

    connection.release();
  } catch (error) {
    console.error(
      "Error connecting to the database or running query:",
      error.message
    );
  }
}

testConnection();
