const express = require('express');
const router = express.Router();
const { updateRoutine, deleteRoutine, createRoutine, getRoutineTasksByListId } = require('../controllers/routineController');
const { verfyToken } = require('../middlewares/jwtMiddleware');
const { createRoutineValidation, updateRoutineValidation, deleteRoutineValidation, getRoutineValidation } = require('../validators/routineValidator')

router.use(express.json());
router.use(verfyToken);

router.put('/:id', updateRoutineValidation, updateRoutine);

router.delete('/:id', deleteRoutineValidation, deleteRoutine);

router.post('/', createRoutineValidation, createRoutine);

router.get('/:listId', getRoutineValidation, getRoutineTasksByListId)



module.exports = router;
