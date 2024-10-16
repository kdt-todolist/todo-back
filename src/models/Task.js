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

const updateTasksByIds = async (taskIds) => {
  let sql = `UPDATE tasks SET done = false WHERE id IN (?)`;
  let [result] = await pool.query(sql, [taskIds]);

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

const getRoutineTasksByListId = async (listId) => {
  const sql = `SELECT * FROM tasks WHERE list_id = ? AND is_routine = true`;
  let fields = [listId];
  let [result] = await pool.query(sql, fields);

  return result;
};

const findTaskByOwner = async (userId, id) => {
  const sql = `SELECT * FROM tasks t JOIN lists l ON t.list_id = l.id WHERE l.user_id = ? AND t.id = ?`;
  let fields = [userId, id];

  let [result] = await pool.query(sql, fields);
  return result.length ? true : false;
}

module.exports = {
  createTask,
  updateTaskById,
  updateTasksByIds,
  deleteTaskById,
  findAllTasks,
  createBulkTask,
  updateIsRoutine,
  getRoutineTasksByListId,
  findTaskByOwner
};
