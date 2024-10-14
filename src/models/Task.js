const pool = require("../config/db");

const createTask = async (content, list_id) => {
  const sql = `INSERT INTO tasks (content, list_id) VALUES (?, ?)`;
  let fields = [content, list_id];
  let [result] = await pool.query(sql, fields);

  return result;
};

const updateTaskById = async (id, content = null, done = false) => {
  let sql = `UPDATE tasks SET `;
  let fields = [];
  if (content) {
    sql += `content = ?, `;
    fields.push(content);
  }
  sql += `done = ? WHERE id = ?`;
  fields.push(done);
  fields.push(id);
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
  const sql = `SELECT 
    t.*, r.mon, r.tue, r.wed, r.thu, r.fri, r.sat,
    r.sun, r.reset_time
    FROM tasks t LEFT JOIN routine r ON t.id = r.task_id WHERE list_id = ?`;

  let fields = [listId];
  let [result] = await pool.query(sql, fields);

  return result;
};

const createBulkTask = async (listId, lists) => {
  const sql = `INSERT INTO tasks (list_id, content, done) VALUES ?`;
  let fields = [];
  lists.forEach((list) => {
    fields.push([listId, list.content, list.done]);
  });
  let [result] = await pool.query(sql, [fields]);

  return result;
};

const updateIsRoutine = async (id, isRoutine) => {
  const sql = `UPDATE tasks SET is_routine = ? WHERE id = ?`;
  let fields = [isRoutine, id];

  let [result] = await pool.query(sql, fields);

  return result.affectedRows;
};

module.exports = {
  createTask,
  updateTaskById,
  deleteTaskById,
  findAllTasks,
  createBulkTask,
  updateIsRoutine,
};
