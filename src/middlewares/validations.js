const { Op } = require('sequelize');
const { verifyToken } = require('../auth/authFunctions');
const { User, Category } = require('../models');

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const user = await User.findOne({ where: { email, password } });

  if (!user) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  return next();
};

const validateToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const payload = verifyToken(authorization, process.env.JWT_SECRET);
    req.body.user = payload;
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

const validateUserDisplayName = async (req, res, next) => {
  const { body } = req;

  if (!body.displayName || body.displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  return next();
};

const validateUserEmailAndPaword = async (req, res, next) => {
  const { body } = req;
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i;

  if (!body.email || !regex.test(body.email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  if (!body.password || body.password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }
  return next();
};

const validateCategory = async (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  return next();
};

const validateNewPost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  return next();
};

const validateCategoryEmpty = async (req, res, next) => {
  const { categoryIds } = req.body;
  const categoriesId = await Category.findAll({ where: { id: { [Op.in]: categoryIds } } });
  if (categoriesId.length !== categoryIds.length) {
      return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  return next();
};

module.exports = {
  validateLogin,
  validateToken,
  validateUserDisplayName,
  validateUserEmailAndPaword,
  validateCategory,
  validateNewPost,
  validateCategoryEmpty,
};