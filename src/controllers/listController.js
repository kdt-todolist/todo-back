const { StatusCodes } = require('http-status-codes');
const List = require('../models/List')

const createList = async (req, res) => {
    const { title } = req.body;

    try {
        const list = await List.createList(title);
        return res.status(StatusCodes.CREATED).json(list);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }
}

const updateList = async (req, res) => {
    const { id } = req.params;
    const { title, isVisible } = req.body;

    let updateRows = 0;
    try {
        updateRows = await List.updateListById(id, title, isVisible);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }

    if (!updateRows)
        return res.status(StatusCodes.NOT_FOUND).end();

    res.status(StatusCodes.OK).end();
}

const deleteList = async (req, res) => {
    const { id } = req.params;

    let deleteRows = 0;
    try {
        deleteRows = await List.deleteListById(id);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }

    if (!deleteRows)
        return res.status(StatusCodes.NOT_FOUND).end();
    res.status(StatusCodes.OK).end();
}

const getAllList = async (req, res) => {
    try {
        const lists = await List.findAllLists();
        return res.status(StatusCodes.OK).json(lists);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }
}

module.exports = {
    createList,
    updateList,
    deleteList,
    getAllList
}