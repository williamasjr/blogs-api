const { User } = require('../models');

const getUsers = async () => {
    const users = await User.findAll({
        attributes: { exclude: ['password'] },
    });
    return users;
};

const getUser = async (email, password) => User.findOne({ where: { email, password } });

const getUserById = async (id) => {
    const users = await User.findByPk(id);
    return users;
};

const getEmail = async (email) => User.findOne({ where: { email } });

const insertUser = async (displayName, email, password, image) => {
    const user = await getEmail(email);
    if (user) {
        return { error: 409, message: 'User already registered' };
    }
    const newUser = await User.create({ displayName, email, password, image });
    return newUser;
};

module.exports = { getUsers, getUser, insertUser, getEmail, getUserById };
