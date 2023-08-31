const categoriesService = require('../services/categories.services');
// const { generateToken } = require('../auth/authFunctions');

const getCategory = async (_req, res) => {
    const categories = await categoriesService.getCategory();
    res.status(200).json(categories);
};

const createCategory = async (req, res) => {
    const { name } = req.body;
    const newCategory = await categoriesService.insertCategory(name);
    return res.status(201).json(newCategory);
};

module.exports = {
    getCategory,
    createCategory,
};
