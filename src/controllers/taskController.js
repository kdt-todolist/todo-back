const { StatusCodes } = require('http-status-codes');
const List = require('../models/List');
const Task = require('../models/Task');

const createTask = async (req, res) => {
    const userId = req.userId;
    const { content, listId } = req.body;

    try {
        const isOwner = await List.findListByOwner(userId, listId);
        if (!isOwner) {
            return res.status(StatusCodes.NOT_FOUND).end();
        }

        const task = await Task.createTask(content, listId);
        return res.status(StatusCodes.CREATED).json(task);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }
}

const updateTask = async (req, res) => {
    const userId = req.userId;
    const { id } = req.params;
    const { content, done } = req.body;

    let updateRows = 0;
    try {
        const isOwner = await Task.findTaskByOwner(userId, id);
        if (isOwner) {
            updateRows = await Task.updateTaskById(id, content, done);
        }
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }

    if (!updateRows)
        return res.status(StatusCodes.NOT_FOUND).end();

    res.status(StatusCodes.OK).end();
}


const deleteTask = async (req, res) => {
    const userId = req.userId;
    const { id } = req.params;

    let deleteRows = 0;
    try {
        const isOwner = await Task.findTaskByOwner(userId, id);
        if (isOwner) {
            deleteRows = await Task.deleteTaskById(id);
        }
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }

    if (!deleteRows)
        return res.status(StatusCodes.NOT_FOUND).end();

    res.status(StatusCodes.OK).end();
}

const getAllTask = async (req, res) => {
    const userId = req.userId;
    const { listId } = req.params;
    try {
        const isOwner = await List.findListByOwner(userId, listId);
        if (!isOwner) {
            return res.status(StatusCodes.NOT_FOUND).end();
        }

        const tasks = await Task.findAllTasks(listId);
        return res.status(StatusCodes.OK).json(tasks);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }
}

const createBulkTask = async (req, res) => {
    const userId = req.userId;
    const { listId, tasks } = req.body;
    try {
        const isOwner = await List.findListByOwner(userId, listId);
        if (!isOwner) {
            return res.status(StatusCodes.NOT_FOUND).end();
        }

        const task = await Task.createBulkTask(listId, tasks);
        return res.status(StatusCodes.CREATED).json(task);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }
}

const resetTaskStatus = async (req, res) => {
    const { id } = req.params;
    let updateRows = 0;

    try {
        updateRows = await Task.updateTaskById(id);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }

    if (!updateRows)
        return res.status(StatusCodes.NOT_FOUND).end();

    res.status(StatusCodes.OK).end();
}


module.exports = {
    createTask,
    updateTask,
    deleteTask,
    getAllTask,
    createBulkTask,
    resetTaskStatus
}
