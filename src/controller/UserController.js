const { StatusCodes } = require('http-status-codes');

const conn = require('../db');


const login = (req, res) => {
    const { email, password } = req.body;

    let sql = '';

    conn.query(sql, (err, results) => {
        if (err)
            return res.status(StatusCodes.BAD_REQUEST).end();

        return res.status(StatusCodes.OK).json(results);
    })
    // return res.status(StatusCodes.OK).json('로그인');

}

module.exports = {
    login
}