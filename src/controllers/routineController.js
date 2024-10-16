const { StatusCodes } = require('http-status-codes');
const Routine = require('../models/Routine');
const List = require('../models/List');
const Task = require('../models/Task');

const createRoutine = async (req, res) => {
    const userId = req.userId;
    const { taskId, week, resetTime } = req.body;
    let updateRows = 0;
    let routine;
    try {
        const isOwner = await Task.findTaskByOwner(userId, taskId);
        if (isOwner) {
            routine = await Routine.createRoutine(taskId, week, resetTime);
            updateRows = await Task.updateIsRoutine(taskId, true);
        }
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }

    if (!updateRows)
        return res.status(StatusCodes.NOT_FOUND).end();

    res.status(StatusCodes.CREATED).json(routine);
}

const updateRoutine = async (req, res) => {
    const userId = req.userId;
    const { id } = req.params;
    const { week, resetTime } = req.body;

    let updateRows = 0;
    try {
        const isOwner = await Routine.findRoutineByOwner(userId, id);
        if (isOwner) {
            updateRows = await Routine.updateRoutineById(id, week, resetTime);
        }
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }

    if (!updateRows)
        return res.status(StatusCodes.NOT_FOUND).end();

    res.status(StatusCodes.OK).end();
}

const deleteRoutine = async (req, res) => {
    const userId = req.userId;
    const { id } = req.params;

    let updateRows = 0;
    try {
        const isOwner = await Routine.findRoutineByOwner(userId, id);
        if (!isOwner) {
            return res.status(StatusCodes.NOT_FOUND).end();
        }
        
        let deletedId = await Routine.deleteRoutineById(id);
        if (deletedId) {
            updateRows = await Task.updateIsRoutine(deletedId, false);
        }
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }

    if (!updateRows)
        return res.status(StatusCodes.NOT_FOUND).end();
    res.status(StatusCodes.OK).end();
}


const getRoutineTasksByListId = async (req, res) => {
    const userId = req.userId;
    const { listId } = req.params;
    try {
        const isOwner = await List.findListByOwner(userId, listId);
        if (!isOwner) {
            return res.status(StatusCodes.NOT_FOUND).end();
        }

        const tasks = await Task.getRoutineTasksByListId(listId);
        return res.status(StatusCodes.OK).json(tasks);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }
}

module.exports = {
    createRoutine,
    updateRoutine,
    deleteRoutine,
    getRoutineTasksByListId
}