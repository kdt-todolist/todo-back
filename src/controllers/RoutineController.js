const { StatusCodes } = require('http-status-codes');
const conn = require('../config/db');


const routine = (req, res) => {
    const { flag } = req.query;
    let sql = '';
    if (flag)
        sql = 'SELECT * FROM todo WHERE flag = true';

    conn.query(sql, (err, results) => {
        if (err)
            return res.status(StatusCodes.BAD_REQUEST).end();

        return res.status(StatusCodes.OK).json(results);
    })
    return res.status(StatusCodes.OK).json('루틴 페이지');

}

module.exports = {
    routine
}