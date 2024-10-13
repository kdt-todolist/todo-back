const pool = require("../config/db");

const createTask = async (content, list_id) => {
  const sql = `INSERT INTO tasks (content, list_id) VALUES (?, ?)`;
  let fields = [content, list_id];

  let [result] = await pool.query(sql, fields);
  return result;
};

const updateTaskById = async (id, content, done) => {
  const sql = `UPDATE tasks SET content = ?, done = ? WHERE id = ?`;
  let fields = [content, done, id];
  let [result] = await pool.query(sql, fields);

  return result.affectedRows;
};

const deleteTaskById = async (id) => {
  const sql = `DELETE FROM tasks WHERE id = ?`;
  let fields = [id];
  let [result] = await pool.query(sql, fields);

  return result.affectedRows;
};

const findAllTasks = async (listId) => {
  const sql = `SELECT * FROM tasks WHERE list_id = ?`;
  let fields = [listId];
  let [result] = await pool.query(sql);
  return result;
};

const createBulkTask = async (listId, lists) => {
  const sql = `INSERT INTO lists (list_id, content, done) VALUES ?`;
  let fields = [];
  lists.forEach(list => {
    fields.push([listId, list.content, list.done]);
  });
  let [result] = await pool.query(sql, [fields]);
  return result;
}

module.exports = {
  createTask,
  updateTaskById,
  deleteTaskById,
  findAllTasks,
  createBulkTask
};
