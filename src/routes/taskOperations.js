const express = require('express');
const router = express.Router();
const { createTask, updateTask, deleteTask, getAllTask } = require('../controller/TaskController');
router.use(express.json());

router.post('/', createTask);

router.put('/:id', updateTask);

router.delete('/:id', deleteTask);

router.get('/',getAllTask)

module.exports = router;
