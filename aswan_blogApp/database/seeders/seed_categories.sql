module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('categories', []),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('categories', null, {})
};
