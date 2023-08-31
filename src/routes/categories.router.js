const express = require('express');

const router = express.Router();

const { getCategory, createCategory } = require('../controller/categories.controller');
const { validateCategory, validateToken } = require('../middlewares/validations');

router.get('/categories', validateToken, getCategory);

router.post('/categories', validateToken, validateCategory, createCategory);

module.exports = router;