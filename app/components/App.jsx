import React, { useEffect, useState } from 'react';
import SideMenu from './SideMenu';
import Search from './Search';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from 'react-router-dom';
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';
import HomePage from './PageContainers/HomePage';
import SearchPage from './PageContainers/SearchPage';
import FolderPage from './PageContainers/FolderPage';
import TagPage from './PageContainers/TagPage';
import TagsView from './CardComponents/TagsView';
import './views_styles.scss';
import AddResourceModal from './AddResourceComponents/AddResourceModal';

export default function App() {
  const [showAddResource, setShowAddResource] = useState(false);
  const [greeting, setGreeting] = useState('Please Login');
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // Get username if logged in
    fetch('/username')
      .then((res) => res.json())
      .then((username) => {
        if (username) setGreeting('Hello ' + username);

        // Get user's followed tags
        fetch('/userTags')
          .then((res) => res.json())
          .then((tags) => {
            console.log('TAGS:', tags);
            setTags(tags);
          })
          .catch((err) => {});
      })
      .catch((err) => {});
  }, []);

  return (
    <Router>
      <div className='header'>
        <h1>{greeting}</h1>
        <Search />
        <button className="headerButton" onClick={()=>setShowAddResource(true)}>Add Resource</button>
        <AddResourceModal open={showAddResource} close={()=>setShowAddResource(false)}/>
      <Link to='/signup'><button className='headerButton'>Signup</button></Link>
      <Link to='/login'><button className='headerButton'>Login</button></Link>
      </div>

      <div id='mainPage'>
        <SideMenu tags={tags} />
        <div className='resourcesContainer'>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/tag' element={<TagPage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/folder' element={<FolderPage />} />
            <Route path='/tagPage' element={<TagPage />} />
            <Route path='/tagsView' element={<TagsView />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
