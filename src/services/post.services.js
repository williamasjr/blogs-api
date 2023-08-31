// const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../models');

const getPost = async () => {
    const postAll = await BlogPost.findAll({
        include: [{
            model: User,
            as: 'user',
            attributes: { exclude: ['password'] },
        },
        { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });
    return postAll;
};

const getPostById = async (id) => {
    const post = await BlogPost.findByPk(id);
    return post;
};

module.exports = { getPost, getPostById };
