const express = require('express');
const router = express.Router();
const { createTaskList, updateTaskList, deleteTaskList } = require('../controllers/TaskListController');
router.use(express.json());

router.post('/', createTaskList);

router.put('/:id', updateTaskList);

router.delete('/:id', deleteTaskList);


module.exports = router;
