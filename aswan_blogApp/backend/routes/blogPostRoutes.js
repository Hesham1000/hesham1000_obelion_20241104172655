const express = require('express');
const router = express.Router();
const blogPostController = require('../controllers/blogPostController');

// GET /api/blogPosts - Retrieve all blog posts
router.get('/api/blogPosts', blogPostController.getAllBlogPosts);

// GET /api/blogPosts/:id - Retrieve a single blog post by ID
router.get('/api/blogPosts/:id', blogPostController.getBlogPostById);

// POST /api/blogPosts - Create a new blog post
router.post('/api/blogPosts', blogPostController.createBlogPost);

// PUT /api/blogPosts/:id - Update an existing blog post by ID
router.put('/api/blogPosts/:id', blogPostController.updateBlogPost);

// DELETE /api/blogPosts/:id - Delete a blog post by ID
router.delete('/api/blogPosts/:id', blogPostController.deleteBlogPost);

module.exports = router;
sql
CREATE TABLE blog_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    tags VARCHAR(255),
    categories VARCHAR(255)
);

CREATE TABLE tags (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

ALTER TABLE blog_posts
ADD CONSTRAINT fk_blog_posts_tags FOREIGN KEY (tags) REFERENCES tags(name);

ALTER TABLE blog_posts
ADD CONSTRAINT fk_blog_posts_categories FOREIGN KEY (categories) REFERENCES categories(name);
sql
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
sql
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('categories', []),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('categories', null, {})
};

// Model file code example for BlogPosts
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class BlogPosts extends Model {}

BlogPosts.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  tags: {
    type: DataTypes.STRING,
  },
  categories: {
    type: DataTypes.STRING,
  },
}, {
  sequelize,
  modelName: 'blog_posts',
});

module.exports = BlogPosts;

// Database configuration file example
const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'db',
  dialect: 'mysql',
});

module.exports = sequelize;