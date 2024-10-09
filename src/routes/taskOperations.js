const express = require('express');
const router = express.Router();
const { createTask, updateTaskContent, updateTaskDone, deleteTask, getAllTask } = require('../controllers/TaskController');
router.use(express.json());

router.post('/', createTask);

router.patch('/:id', updateTaskContent);

router.patch('/:id', updateTaskDone);

router.delete('/:id', deleteTask);

router.get('/', getAllTask)

module.exports = router;
