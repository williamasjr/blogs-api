const express = require('express');

const router = express.Router();

const { getUsers, createUser, getById } = require('../controller/users.controller');
const {
    validateUserEmailAndPaword,
    validateUserDisplayName,
    validateToken,
} = require('../middlewares/validations');

router.get('/user', validateToken, getUsers);

router.get('/user/:id', validateToken, getById);

router.post('/user', validateUserDisplayName, validateUserEmailAndPaword, createUser);

module.exports = router;