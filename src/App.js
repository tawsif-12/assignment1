import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import AuthorProfile from './pages/AuthorProfile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React,{useEffect,useState} from 'react';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/author-profile" element={<AuthorProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
