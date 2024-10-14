const { StatusCodes } = require('http-status-codes');
const Routine = require('../models/Routine');
const Task = require('../models/Task');

const createRoutine = async (req, res) => {
    const { taskId, week, resetTime } = req.body;
    let updateRows = 0;
    let routine;
    try {
        routine = await Routine.createRoutine(taskId, week, resetTime);
        updateRows = await Task.updateIsRoutine(taskId, true);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }

    if (!updateRows)
        return res.status(StatusCodes.NOT_FOUND).end();

    res.status(StatusCodes.CREATED).json(routine);
}

const updateRoutine = async (req, res) => {
    const { id } = req.params;
    const { week, resetTime } = req.body;

    let updateRows = 0;
    try {
        updateRows = await Routine.updateRoutineById(id, week, resetTime);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }

    if (!updateRows)
        return res.status(StatusCodes.NOT_FOUND).end();

    res.status(StatusCodes.OK).end();
}

const deleteRoutine = async (req, res) => {
    const { id } = req.params;
    const { taskId } = req.body;
    let deleteRows = 0;
    let updateRows = 0;
    try {
        deleteRows = await Routine.deleteRoutineById(id);
        updateRows = await Task.updateIsRoutine(taskId, false);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }

    if (!deleteRows && !updateRows)
        return res.status(StatusCodes.NOT_FOUND).end();
    res.status(StatusCodes.OK).end();
}


const resetTaskStatus = async (req, res) => {
    const { taskId } = req.body;
    let updateRows = 0;

    try {
        updateRows = await Task.updateDone(taskId);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }

    if (!updateRows)
        return res.status(StatusCodes.NOT_FOUND).end();

    res.status(StatusCodes.OK).end();
}


module.exports = {
    createRoutine,
    updateRoutine,
    deleteRoutine,
    resetTaskStatus,
}