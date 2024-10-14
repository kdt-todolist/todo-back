const express = require('express');
const router = express.Router();
const { createTask, updateTask, deleteTask, getAllTask, createBulkTask, resetTaskStatus } = require('../controllers/taskController');
router.use(express.json());

router.post('/', createTask);

router.put('/:id', updateTask);

router.delete('/:id', deleteTask);

router.get('/:listId', getAllTask)

router.post('/bulk', createBulkTask);

router.put('/:id/reset', resetTaskStatus);


module.exports = router;
