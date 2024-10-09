const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({ path: './src/config/.env' });

app.listen(process.env.PORT);

const loginRouter = require('./routes/users');
const taskRouter = require('./routes/taskOperations');
const taskListRouter = require('./routes/taskListManager');
const routineRouter = require('./routes/routine');

app.use(morgan('dev'));

app.use('/users', loginRouter);
app.use('/tasks', taskRouter);
app.use('/taskLists', taskListRouter);
app.use('/routines', routineRouter);