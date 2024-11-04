const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('aswan_blogApp', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql',
  logging: false
});

class BlogPost extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      tags: {
        type: DataTypes.STRING,
        allowNull: true
      },
      categories: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
      sequelize,
      modelName: 'blog_posts',
      timestamps: false
    });
  }
}

BlogPost.init(sequelize);

module.exports = BlogPost;