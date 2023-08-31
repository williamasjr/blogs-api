const express = require('express');

const router = express.Router();

const loginController = require('../controller/login.controller');

const { validateLogin } = require('../middlewares/validations');

router.post('/login', validateLogin, loginController.create);

module.exports = router;