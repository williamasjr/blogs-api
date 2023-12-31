module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define(
    'BlogPost',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'blog_posts'
    });
    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, { 
            as: 'user',
            foreingKey: 'userId',  
        });
      };
    return BlogPost;
  };
  