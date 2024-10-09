const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({ path: './src/config/.env' });

app.listen(process.env.PORT);

const userRouter = require('./routes/userRoute');
const taskRouter = require('./routes/taskRoute');
const listRouter = require('./routes/listRoute');
const routineRouter = require('./routes/routineRoute');

app.use(morgan('dev'));

app.use('/users', userRouter);
app.use('/tasks', taskRouter);
app.use('/lists', listRouter);
app.use('/routines', routineRouter);