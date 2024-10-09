const { StatusCodes } = require('http-status-codes');
const conn = require('../config/db');

const createTaskList = (req, res) => {
    const { title, description } = req.body;

    let sql = '';

    conn.query(sql, (err, results) => {
        if (err)
            return res.status(StatusCodes.BAD_REQUEST).end();

        return res.status(StatusCodes.OK).json(results);
    })

};

const updateTaskList = (req, res) => {
    const { category_id } = req.params;
    const { title } = req.body;
    let sql = '';

    conn.query(sql, (err, results) => {
        if (err)
            return res.status(StatusCodes.BAD_REQUEST).end();

        return res.status(StatusCodes.OK).json(results);
    })

};

const deleteTaskList = (req, res) => {
    const { id } = req.params;

    let sql = '';

    conn.query(sql, (err, results) => {
        if (err)
            return res.status(StatusCodes.BAD_REQUEST).end();

        return res.status(StatusCodes.OK).json(results);
    })

};

module.exports = {
    createTaskList,
    updateTaskList,
    deleteTaskList
}