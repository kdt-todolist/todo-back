const pool = require("../config/db");

const createRoutine = async (taskId, week, resetTime) => {
  const sql = `INSERT INTO routine (task_id, mon, tue, wed, thu, fri, sat, sun, reset_time) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  let fields = [
    taskId,
    week.mon,
    week.tue,
    week.wed,
    week.thu,
    week.fri,
    week.sat,
    week.sun,
    resetTime,
  ];

  let [result] = await pool.query(sql, fields);
  return result;
};

const updateRoutineById = async (id, week, resetTime) => {
  const sql = `UPDATE routine SET mon = ?, tue = ?, wed = ?, thu = ?, fri = ?, sat = ?, sun =?, reset_time = ? WHERE id = ?`;
  let fields = [
    week.mon,
    week.tue,
    week.wed,
    week.thu,
    week.fri,
    week.sat,
    week.sun,
    resetTime,
    id,
  ];
  let [result] = await pool.query(sql, fields);

  return result.affectedRows;
};

const deleteRoutineById = async (id) => {
  let sql = 'SELECT task_id FROM routine WHERE id = ?'
  let fields = [id];

  let [rows] = await pool.query(sql, fields);
  let deletedId = 0;
  if (rows.length) {
    deletedId = rows[0].task_id;
  }

  sql = `DELETE FROM routine WHERE id = ?`;
  fields = [id];
  let [result] = await pool.query(sql, fields);

  return result.affectedRows ? deletedId : 0;
};

const getRoutineBySchedule = async (time, day) => {
  const sql = `SELECT task_id FROM routine WHERE reset_time = ? AND ${day} = true`;

  let fields = [time];
  let [result] = await pool.query(sql, fields);

  return result;
};

const findRoutineByOwner = async (userId, id) => {
  const sql = 'SELECT l.user_id FROM `routine` r JOIN tasks t ON r.task_id = t.id JOIN lists l ON t.list_id = l.id WHERE l.user_id = ? AND r.id = ?';
  let fields = [userId, id];
  let [result] = await pool.query(sql, fields);

  return result.length ? true : false;
}

module.exports = {
  createRoutine,
  updateRoutineById,
  deleteRoutineById,
  getRoutineBySchedule,
  findRoutineByOwner
};
