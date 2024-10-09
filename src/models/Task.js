const pool = require("../config/db");

const createTask = async (content, list_id) => {
  const sql = `INSERT INTO tasks (content, list_id) VALUES (?, ?)`;
  let fields = [content, list_id];

  let [result] = await pool.query(sql, fields);
  return result;
};

const updateTaskContentById = async (id, content) => {
  const sql = `UPDATE tasks SET content = ? WHERE id = ?`;
  let fields = [id, content];
  let [result] = await pool.query(sql, fields);

  return result.affectedRows;
};

const updateTaskDoneById = async (id, done) => {
  const sql = `UPDATE tasks SET done = ? WHERE id = ?`;
  let fields = [id, done];
  let [result] = await pool.query(sql, fields);

  return result.affectedRows;
};

const deleteTaskById = async (id) => {
  const sql = `DELETE FROM tasks WHERE id = ?`;
  let fields = [id];
  let [result] = await pool.query(sql, fields);

  return result.affectedRows;
};

const findAllTasks = async () => {
  const sql = `SELECT * FROM tasks`;
  let [result] = await pool.query(sql);
  return result;
};

module.exports = {
  createTask,
  updateTaskDoneById,
  updateTaskContentById,
  deleteTaskById,
  findAllTasks,
};
