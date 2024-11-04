module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('BlogPosts', [
    {
      title: 'First Blog Post',
      content: 'This is the content of the first blog post.',
      tags: 'tag1, tag2',
      categories: 'category1, category2'
    },
    {
      title: 'Second Blog Post',
      content: 'This is the content of the second blog post.',
      tags: 'tag3, tag4',
      categories: 'category3, category4'
    }
  ]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('BlogPosts', null, {})
};
