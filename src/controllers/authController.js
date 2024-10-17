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

  // 클라이언트를 다시 지정된 URL로 리다이렉트, 이때 토큰을 URL에 포함
  res.redirect(`http://localhost:3000/?token=${token}`);
}

module.exports = {
  createToken
}