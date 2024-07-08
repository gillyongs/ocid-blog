// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import List from './List'; //대회
import Post from './Post'; //경기일정

function App() {
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path="/" element={<Navigate to="/100" />} />
          <Route path="/list" element={<Navigate to="/list/100" />} />
          <Route path="/list/:listNumber" element={<List />} />
          <Route path="/:postNumber" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
