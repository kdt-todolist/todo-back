const express = require('express');
const router = express.Router();
const { routine } = require('../controllers/routineController');
router.use(express.json());

router.get('/', routine);




module.exports = router;
