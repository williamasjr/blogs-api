const { User } = require('../models');

const createLogin = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  return user;
};

module.exports = { createLogin };