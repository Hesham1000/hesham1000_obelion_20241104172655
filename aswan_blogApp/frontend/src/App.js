import React from 'react';
import Registration from './src/components/Registration/Registration.js';
import Login from './src/components/Login/Login.js';
import BlogPost from './src/components/BlogPost/BlogPost.js';
import Search from './src/components/Search/Search.js';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
      <Registration />
      <Login />
      <BlogPost />
      <Search />
    </div>
  );
}

export default App;
