const pool = require("../config/db");

const createList = async (userId, title) => {
  const sql = `INSERT INTO lists (user_id, title) VALUES (?, ?)`;
  let fields = [userId, title];

  let [result] = await pool.query(sql, fields);
  return result;
};

const updateListById = async (id, title, isVisible) => {
  const sql = `UPDATE lists SET title = ?, is_visible = ? WHERE id = ?`;
  let fields = [title, isVisible, id];
  let [result] = await pool.query(sql, fields);

  return result.affectedRows;
};

const deleteListById = async (id) => {
  const sql = `DELETE FROM lists WHERE id = ?`;
  let fields = [id];
  let [result] = await pool.query(sql, fields);

  return result.affectedRows;
};

const findListByOwner = async (userId, id) => {
  const sql = `SELECT * FROM lists WHERE user_id = ? AND id = ?`;
  let fields = [userId, id];
  let [result] = await pool.query(sql, fields);

  return result.length ? true : false;
}

const findAllLists = async (userId) => {
  const sql = `SELECT * FROM lists WHERE user_id = ?`;
  let fields = [userId];
  let [result] = await pool.query(sql, fields);
  return result;
};

const createBulkList = async (userId, lists) => {
  const sql = `INSERT INTO lists (user_id, title, is_visible) VALUES ?`;
  let fields = [];
  lists.forEach(list => {
    fields.push([userId, list.title, list.isVisible]);
  });
  let [result] = await pool.query(sql, [fields]);
  return result;
}

module.exports = {
  createList,
  updateListById,
  deleteListById,
  findAllLists,
  createBulkList,
  findListByOwner
};
