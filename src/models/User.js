const pool = require("../config/db");

const findOrCreateUser = async (email, provider) => {
  let sql = `SELECT * FROM users WHERE email = ? AND oauth_provider = ?`;

  let fields = [email, provider];

  let [results] = await pool.query(sql, fields);

  if (!results.length) {
    sql = `INSERT INTO users (email, oauth_provider) VALUES (?, ?)`;
    const [insertResult] = await pool.query(sql, fields);

    const [newUser] = await pool.query("SELECT * FROM users WHERE id = ?", [
      insertResult.insertId,
    ]);

    results = newUser;
  }

  return results;
};

module.exports = { findOrCreateUser };
