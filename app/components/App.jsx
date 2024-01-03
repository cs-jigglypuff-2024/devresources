import React from 'react';
import Search from './Search';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';
import HomePage   from './PageContainers/HomePage';
import TagPage    from './PageContainers/TagPage';
import SearchPage from './PageContainers/SearchPage';
import FolderPage from './PageContainers/FolderPage';
import './views_styles.scss';

export default function App() {
  return (
    <Router>
      <h1>App header</h1>
      <Search />
      <Link to='/signup'><button>Signup</button></Link>
      <Link to='/login'><button>Login</button></Link>
    <div className="resourcesContainer"> 
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<HomePage/>}   />
        <Route path="/tag" element={<TagPage/>}    />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/folder" element={<FolderPage/>} />
      </Routes>
      </div>
    </Router>
  );
}
