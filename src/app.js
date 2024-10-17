const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const scheduler = require('./scheduler/scheduler');

dotenv.config({ path: './src/config/.env' });

scheduler.start();
app.listen(process.env.PORT);

const taskRouter = require('./routes/taskRoute');
const listRouter = require('./routes/listRoute');
const routineRouter = require('./routes/routineRoute');
const authRouter = require('./routes/authRoute');

app.use(cors({
    origin: 'http://localhost:3000', // 클라이언트 도메인
    credentials: true, // 쿠키 전송 허용
}));  
app.use(morgan('dev'));

app.use('/tasks', taskRouter);
app.use('/lists', listRouter);
app.use('/routines', routineRouter);
app.use('/auth', authRouter);