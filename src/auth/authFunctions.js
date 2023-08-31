const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const JWT_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

const generateToken = (payload) => jwt.sign(payload, JWT_SECRET, JWT_CONFIG);

const verifyToken = (token) => jwt.verify(token, JWT_SECRET);

module.exports = { generateToken, verifyToken };