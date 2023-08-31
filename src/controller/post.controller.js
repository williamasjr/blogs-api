const postService = require('../services/post.services');

const getPostCategory = async (_req, res) => {
    const postsCategories = await postService.getPost();
    res.status(200).json(postsCategories);
};

const getPostCategoryById = async (req, res) => {
    const { id } = req.params;
    const postId = await postService.getPostById(id);
    return res.status(200).json(postId);
};

module.exports = {
    getPostCategory,
    getPostCategoryById,
};
