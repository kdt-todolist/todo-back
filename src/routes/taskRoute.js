const express = require('express');
const router = express.Router();
const { createTask, updateTask, deleteTask, getAllTask, createBulkTask } = require('../controllers/taskController');
router.use(express.json());

router.post('/', createTask);

router.put('/:id', updateTask);

router.delete('/:id', deleteTask);

router.get('/:id', getAllTask)

router.post('/bulk', createBulkTask);


module.exports = router;
