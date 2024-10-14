const express = require('express');
const router = express.Router();
const { updateRoutine, deleteRoutine, createRoutine } = require('../controllers/routineController');
router.use(express.json());


router.put('/:id', updateRoutine);

router.delete('/:id', deleteRoutine);

router.post('/', createRoutine);





module.exports = router;
