const express = require('express');
const router = express.Router();
const { updateRoutine, deleteRoutine, createRoutine, getRoutineTasksByListId } = require('../controllers/routineController');
const { verfyToken } = require('../middlewares/jwtMiddleware');

router.use(express.json());
router.use(verfyToken);

router.put('/:id', updateRoutine);

router.delete('/:id', deleteRoutine);

router.post('/', createRoutine);

router.get('/:listId', getRoutineTasksByListId)



module.exports = router;
