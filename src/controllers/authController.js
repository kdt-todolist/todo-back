const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({ path: './src/config/.env' });

const createToken = (req, res) => {
  const user = req.user;
  const payload = {
    id: user.id
  };
  const options = {
    subject: 'user',
    expiresIn: '1h',
    issuer: process.env.JWT_ISSUER
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, options);

  res.cookie('accessToken', token);
  res.status(StatusCodes.OK).end();
}

module.exports = {
  createToken
}