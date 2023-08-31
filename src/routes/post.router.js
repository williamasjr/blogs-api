const express = require('express');

const router = express.Router();

const {
    getPostCategory,
    getPostCategoryById,
} = require('../controller/post.controller');

const { validateToken } = require('../middlewares/validations');

router.get('/post', validateToken, getPostCategory);

router.get('/post/:id', validateToken, getPostCategoryById);

// router.post('/post', validateToken, validateNewPost, validateCategoryEmpty);

module.exports = router;