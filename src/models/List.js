const pool = require("../config/db");

const createList = async (title) => {
  const sql = `INSERT INTO lists (title) VALUES (?)`;
  let fields = [title];

  let [result] = await pool.query(sql, fields);
  return result;
};

const updateListTitleById = async (id, title) => {
  const sql = `UPDATE lists SET title = ? WHERE id = ?`;
  let fields = [id, title];
  let [result] = await pool.query(sql, fields);

  return result.affectedRows;
};

const updateListIsVisibleById = async (id, isVisible) => {
  const sql = `UPDATE tasks SET is_visible = ? WHERE id = ?`;
  let fields = [id, isVisible];
  let [result] = await pool.query(sql, fields);

  return result.affectedRows;
};

const deleteListById = async (id) => {
  const sql = `DELETE FROM lists WHERE id = ?`;
  let fields = [id];
  let [result] = await pool.query(sql, fields);

  return result.affectedRows;
};

const findAllLists = async () => {
  const sql = `SELECT * FROM lists`;
  let [result] = await pool.query(sql);
  return result;
};

module.exports = {
  createList,
  updateListIsVisibleById,
  updateListTitleById,
  deleteListById,
  findAllLists,
};
