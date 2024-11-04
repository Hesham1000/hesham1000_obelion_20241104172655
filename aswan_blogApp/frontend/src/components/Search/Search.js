import React, { useState } from 'react';
import './Search.css';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://aswan_blogApp-backend.cloud-stacks.com/api/search', {
        params: { searchTerm },
        headers: { 'Content-Type': 'application/json' }
      });
      setFilteredPosts(response.data);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Error retrieving search results');
    }
  };

  return (
    <div className="search-container">
      <h1>Search for Blog Post</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter keywords..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="search-results">
        {filteredPosts.map((post, index) => (
          <div className="search-result" key={index}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <a href={`/posts/${post.id}`}>Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
