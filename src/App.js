// App.js
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Post from './Post'; //경기일정

function App() {
  return (
    <div className="App" baseUrl = "ocid-blog">
      <Router >
        <Routes>
          <Route path="/" element={<Navigate to="/ocid-blog/100" />} />
          <Route path="/ocid-blog" element={<Navigate to="/ocid-blog/100" />} />
          <Route path="/ocid-blog/:postNumber" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
