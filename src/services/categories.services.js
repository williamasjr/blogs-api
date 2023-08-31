const { Category } = require('../models');

const getCategory = async () => {
    const categories = await Category.findAll();
    return categories;
};

const insertCategory = async (name) => {
    const newCategory = await Category.create({ name });
    return newCategory;
};

module.exports = { getCategory, insertCategory };
