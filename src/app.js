const express = require('express');
const app = express();
const dotenv = require('dotenv');

const loginRouter = require('./routes/users');
const taskRouter = require('./routes/taskOperations');
const taskListRouter = require('./routes/taskListManager');
const routineRouter = require('./routes/routine');


dotenv.config({ path: './config/.env' });

app.get('/', (req, res) => {
  res.send('hi');
})

app.listen(8888);

app.use('/users', loginRouter);
app.use('/tasks', taskRouter);
app.use('/taskLists', taskListRouter);
app.use('/routines', routineRouter);