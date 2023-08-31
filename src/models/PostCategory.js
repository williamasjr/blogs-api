module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
      postId: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      categoryId: {
          type: DataTypes.INTEGER,
          allowNull: false,
      }
  }, {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories',
  })
  PostCategory.associate = (model) => {
      model.BlogPost.belongsToMany(model.Category, {
          as: 'categories',
          through: PostCategory,
          foreignKey: 'postId', 
          otherKey: 'categoryId',
      });
      model.Category.belongsToMany(model.BlogPost, {
          as: 'blog_posts',
          through: PostCategory,
          foreignKey: 'categoryId',
          otherKey: 'postId',
      })

  }
  return PostCategory;
};