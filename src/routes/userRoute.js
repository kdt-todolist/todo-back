const express = require('express');
const router = express.Router();
const { login } = require('../controllers/userController');
router.use(express.json());

// 로그인 API
router.post('/login', login);


module.exports = router;
