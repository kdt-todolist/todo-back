const express = require('express');
const router = express.Router();
const { updateRoutine, deleteRoutine, createRoutine } = require('../controllers/routineController');
const { verfyToken } = require('../middlewares/jwtMiddleware');

router.use(express.json());
router.use(verfyToken);

router.put('/:id', updateRoutine);

router.delete('/:id', deleteRoutine);

router.post('/', createRoutine);





module.exports = router;
