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
  if (result.affectedRows < 0) {
    throw new Error("Cannot update title in lists table.");
  }
  return result;
};

const updateListIsVisibleById = async (id, isVisible) => {
  const sql = `UPDATE tasks SET is_visible = ? WHERE id = ?`;
  let fields = [id, isVisible];
  let [result] = await pool.query(sql, fields);
  if (result.affectedRows < 0) {
    throw new Error("Cannot update is_visible in lists table.");
  }
  return result;
};

const deleteListById = async (id) => {
  const sql = `DELETE FROM lists WHERE id = ?`;
  let fields = [id];
  let [result] = await pool.query(sql, fields);
  if (result.affectedRows < 0) {
    throw new Error("Cannot delete task");
  }
  return result;
};

const findAllLists = async () => {
  const sql = `SELECT * FROM Lists`;
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
