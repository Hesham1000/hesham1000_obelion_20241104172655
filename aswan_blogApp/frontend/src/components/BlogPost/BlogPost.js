import React, { useState } from 'react';
import './BlogPost.css';
import axios from 'axios';

function BlogPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [categories, setCategories] = useState('');
  
  const handlePublish = async () => {
    try {
      const response = await axios.post('https://aswan_blogApp-backend.cloud-stacks.com/api/blogPosts', {
        title,
        content,
        tags,
        categories
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert('Blog post created successfully');
      setTitle('');
      setContent('');
      setTags('');
      setCategories('');
    } catch (error) {
      alert('Error creating blog post');
    }
  };

  return (
    <div className="blogpost-container">
      <header className="blogpost-header">
        <div className="brand-logo">Brand</div>
        <nav className="navigation-tabs">
          <a href="#home" className="nav-link">Home</a>
          <a href="#categories" className="nav-link">Categories</a>
          <a href="#tags" className="nav-link">Tags</a>
          <a href="#publish" className="nav-link">Publish</a>
        </nav>
      </header>
      <main className="blogpost-main">
        <div className="form-field">
          <input
            type="text"
            className="blogpost-title"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-field">
          <textarea
            className="blogpost-content"
            placeholder="Write your content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="form-field">
          <input
            type="text"
            className="blogpost-tags"
            placeholder="Add tags (comma separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div className="form-field">
          <input
            type="text"
            className="blogpost-categories"
            placeholder="Add categories (comma separated)"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          />
        </div>
        <button className="publish-button" onClick={handlePublish}>
          Publish
        </button>
      </main>
      <footer className="blogpost-footer">
        <div className="footer-links">
          <a href="#profile" className="footer-link">Profile</a>
          <a href="#drafts" className="footer-link">Saved Drafts</a>
          <a href="#published" className="footer-link">Published Posts</a>
        </div>
        <div className="legal-info">
          © 2023 BlogApp
        </div>
        <div className="social-icons">
          <a href="#facebook" className="social-icon">Facebook</a>
          <a href="#twitter" className="social-icon">Twitter</a>
          <a href="#instagram" className="social-icon">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default BlogPost;
