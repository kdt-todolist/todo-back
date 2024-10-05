const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config({ path: './config/.env' });

app.get('/', (req, res) => {
  res.send('hi');
})

app.listen(process.env.PORT);