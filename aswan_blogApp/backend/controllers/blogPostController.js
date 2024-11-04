const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('aswan_blogApp', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql',
  logging: false
});

const BlogPost = sequelize.define('BlogPost', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  tags: {
    type: DataTypes.STRING
  },
  categories: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'blog_posts',
  timestamps: false
});

const Tag = sequelize.define('Tag', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'tags',
  timestamps: false
});

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'categories',
  timestamps: false
});

async function createBlogPost(req, res) {
  try {
    const { title, content, tags, categories } = req.body;
    const newPost = await BlogPost.create({ title, content, tags, categories });
    res.status(201).json({ message: 'Blog post created successfully', data: newPost });
  } catch (error) {
    res.status(500).json({ message: 'Error creating blog post', error: error.message });
  }
}

async function getAllBlogPosts(req, res) {
  try {
    const posts = await BlogPost.findAll();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog posts', error: error.message });
  }
}

async function getBlogPostById(req, res) {
  try {
    const { id } = req.params;
    const post = await BlogPost.findByPk(id);

    if (!post) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog post', error: error.message });
  }
}

async function updateBlogPost(req, res) {
  try {
    const { id } = req.params;
    const { title, content, tags, categories } = req.body;

    const post = await BlogPost.findByPk(id);
    if (!post) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    await post.update({ title, content, tags, categories });
    res.status(200).json({ message: 'Blog post updated successfully', data: post });
  } catch (error) {
    res.status(500).json({ message: 'Error updating blog post', error: error.message });
  }
}

async function deleteBlogPost(req, res) {
  try {
    const { id } = req.params;

    const post = await BlogPost.findByPk(id);
    if (!post) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    await post.destroy();
    res.status(200).json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting blog post', error: error.message });
  }
}

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
  updateBlogPost,
  deleteBlogPost
};