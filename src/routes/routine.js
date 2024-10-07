const express = require('express');
const router = express.Router();
const { routine } = require('../controller/RoutineController');
router.use(express.json());

router.get('/', routine);




module.exports = router;
