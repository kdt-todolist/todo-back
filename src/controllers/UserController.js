const { StatusCodes } = require('http-status-codes');
const conn = require('../config/db');

const login = async (req, res) => {
    const { email } = req.body;
    let user;

    try {
        user = await User.findUserByEmail(email);
    } catch (error) {
        return res.staus(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }

    if (!user)
        return res.staus(StatusCodes.UNAUTHORIZED).end();


    res.status(StatusCodes.OK).json(user);
}

module.exports = {
    login
}