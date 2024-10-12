const { StatusCodes } = require('http-status-codes');
const Task = require('../models/Task')

const createTask = async (req, res) => {
    const { content, list_id } = req.body;

    try {
        const task = await Task.createTask(content, list_id);
        return res.status(StatusCodes.CREATED).json(task);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }
}

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { content, done } = req.body;

    let updateRows = 0;
    try {
        updateRows = await Task.updateTaskById(id, content, done);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }

    if (!updateRows)
        return res.status(StatusCodes.NOT_FOUND).end();

    res.status(StatusCodes.OK).end();
}


const deleteTask = async (req, res) => {
    const { id } = req.params;

    let deleteRows = 0;
    try {
        deleteRows = await Task.deleteTaskById(id);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }

    if (!deleteRows)
        return res.status(StatusCodes.NOT_FOUND).end();

    res.status(StatusCodes.OK).end();
}

const getAllTask = async (req, res) => {
    try {
        const tasks = await Task.findAllTasks();
        return res.status(StatusCodes.OK).json(tasks);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }
}

const createBulkTask = async (req, res) => {
    const { tasks } = req.body;
    try {
        const task = await Task.createBulkTask(tasks);
        return res.status(StatusCodes.CREATED).json(task);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }
}

module.exports = {
    createTask,
    updateTask,
    deleteTask,
    getAllTask,
    createBulkTask
}
