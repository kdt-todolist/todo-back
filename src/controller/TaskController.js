const { StatusCodes } = require('http-status-codes');

const conn = require('../db');

const createTask = (req, res) => {
    const { title, description, category } = req.body; // 카테고리 ?

    let sql = '';

    conn.query(sql, (err, results) => {
        if (err)
            return res.status(StatusCodes.BAD_REQUEST).end();

        return res.status(StatusCodes.OK).json(results);
    })
};

const updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    let sql = '';

    conn.query(sql, (err, results) => {
        if (err)
            return res.status(StatusCodes.BAD_REQUEST).end();

        return res.status(StatusCodes.OK).json(results);
    })
};

const deleteTask = (req, res) => {
    const { id } = req.params;
    let sql = '';

    conn.query(sql, (err, results) => {
        if (err)
            return res.status(StatusCodes.BAD_REQUEST).end();

        return res.status(StatusCodes.OK).json(results);
    })
};

const getAllTask = (req, res) => {

    let sql = "SELECT * FROM todo";

    conn.query(sql, (err, results) => {
        if (err)
            return res.status(StatusCodes.BAD_REQUEST).end();

        return res.status(StatusCodes.OK).json(results);
    })
};

module.exports = {
    createTask,
    updateTask,
    deleteTask,
    getAllTask
}