const { StatusCodes } = require('http-status-codes');
const User = require('../models/User')

const login = async (req, res) => {
    const { email, provider } = req.body;
    let user;

    try {
        user = await User.findOrCreateUser(email, provider);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }

    if (!user)
        return res.status(StatusCodes.UNAUTHORIZED).end();


    res.status(StatusCodes.OK).json(user);
}

module.exports = {
    login
}
