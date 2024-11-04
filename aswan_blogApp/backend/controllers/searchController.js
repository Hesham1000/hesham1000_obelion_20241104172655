const { Sequelize, DataTypes } = require('sequelize');
const express = require('express');
const sequelize = new Sequelize('aswan_blogApp', 'root', 'root', {
  host: 'db',
  dialect: 'mysql',
  port: 3306
});

// Define the BlogPost model
const BlogPost = sequelize.define('BlogPost', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  excerpt: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
}, {
  tableName: 'blog_posts',
  timestamps: false
});

// Define a function to handle search requests
const searchBlogPosts = async (req, res) => {
  const { searchTerm } = req.query;

  if (!searchTerm) {
    return res.status(400).json({ message: 'Search term is required' });
  }

  try {
    const results = await BlogPost.findAll({
      where: {
        title: sequelize.where(sequelize.fn('LOWER', sequelize.col('title')), 'LIKE', '%' + searchTerm.toLowerCase() + '%')
      }
    });

    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ message: 'Error retrieving search results', error: error.message });
  }
};

module.exports = {
  searchBlogPosts
};
