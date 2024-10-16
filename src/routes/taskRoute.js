const express = require('express');
const router = express.Router();
const { createTask, updateTask, deleteTask, getAllTask, createBulkTask, resetTaskStatus } = require('../controllers/taskController');
const { verfyToken } = require('../middlewares/jwtMiddleware');
const { createTaskValidation, deleteTaskValidation, updateTaskValidation, getAllTaskValidation, createBulkTaskValidation, resetTaskStatusValidation } = require('../validators/taskValidator');

router.use(express.json());
router.use(verfyToken);

router.post('/', createTaskValidation, createTask);

router.put('/:id', updateTaskValidation, updateTask);

router.delete('/:id', deleteTaskValidation, deleteTask);

router.get('/:listId', getAllTaskValidation, getAllTask)

router.post('/bulk', createBulkTaskValidation, createBulkTask);

router.put('/:id/reset', resetTaskStatusValidation, resetTaskStatus);




module.exports = router;
