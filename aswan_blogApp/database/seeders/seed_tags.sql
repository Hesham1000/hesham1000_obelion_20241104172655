javascript
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('tags', [
    { name: 'Technology' },
    { name: 'Health' },
    { name: 'Science' },
    { name: 'Education' },
    { name: 'Business' },
  ]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('tags', null, {})
};
