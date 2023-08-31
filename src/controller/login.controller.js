const { generateToken } = require('../auth/authFunctions');
const userService = require('../services/user.services');

const create = async (req, res) => {
    const { email, password } = req.body;
    const user = await userService.getUser(email, password);
    const token = generateToken({ user });
    return res.status(200).json({ token });
};

module.exports = { create };