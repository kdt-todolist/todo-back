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
  const sql = `DELETE FROM routine WHERE id = ?`;
  let fields = [id];
  let [result] = await pool.query(sql, fields);

  return result.affectedRows;
};

const getRoutineBySchedule = async (time, day) => {
  const sql = `SELECT task_id FROM routine WHERE reset_time = ? AND ? = true`;

  let fields = [time, day];
  let [result] = await pool.query(sql, fields);

  return result;
};

module.exports = {
  createRoutine,
  updateRoutineById,
  deleteRoutineById,
  getRoutineBySchedule
};
