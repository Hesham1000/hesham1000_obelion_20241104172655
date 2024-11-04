const { Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('aswan_blogApp', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql',
  logging: false,
});

class Tag extends Model {
  static init(sequelize) {
    super.init({
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
      modelName: 'tags',
      tableName: 'tags',
      timestamps: false,
    });
  }
}

module.exports = Tag;