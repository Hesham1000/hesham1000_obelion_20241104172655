const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('aswan_blogApp', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql',
  logging: false,
});

class Category extends Model {}

Category.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
}, {
  sequelize,
  modelName: 'categories', // Ensure model name matches the table name
  tableName: 'categories',
  timestamps: false,
});

module.exports = Category;