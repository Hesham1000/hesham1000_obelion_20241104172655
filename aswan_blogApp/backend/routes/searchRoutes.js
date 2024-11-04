const express = require('express');
const router = express.Router();
const { searchBlogPosts } = require('../controllers/searchController');

router.get('/search', searchBlogPosts);

module.exports = router;
