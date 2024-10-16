const cron = require('node-cron');
const DAYS_OF_THE_WEEK = require('../constants/days');
const Task = require('../models/Task');
const Routine = require('../models/Routine');

const start = () => cron.schedule('*/1 * * * *', async () => {
  const now = new Date();
  const hour = now.getHours().toString().padStart(2, '0');
  const minute = now.getMinutes().toString().padStart(2, '0');
  
  const time = hour + ':' + minute;
  const day = DAYS_OF_THE_WEEK[now.getDay()];

  try {
    let taskIds = await Routine.getRoutineBySchedule(time, day);
    if (taskIds.length) {
      taskIds = taskIds.map(value => value.task_id);
      let updateRows = await Task.updateTasksByIds(taskIds);
      console.log(`${time} ${day}: ${updateRows}개가 초기화됨.`);
    }
  } catch (error) {
    console.log(error);
  }
}, {
  timezone: 'Asia/Seoul'
});

module.exports = {
  start
}