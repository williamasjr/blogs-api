const userService = require('../services/user.services');
const { generateToken } = require('../auth/authFunctions');

const getUsers = async (_req, res) => {
    const users = await userService.getUsers();
    res.status(200).json(users);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    if (!user) {
        return res.status(404).json({ message: 'User does not exist' });
    }
    delete user.dataValues.password;
    return res.status(200).json(user);
};

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const { error, message } = await userService.insertUser(displayName, email, password, image);
    if (error) {
        return res.status(error).json({ message });
    }
    const payload = { email };
    const token = generateToken(payload);
    return res.status(201).json({ token });
};

module.exports = {
    getUsers,
    createUser,
    getById,
};
