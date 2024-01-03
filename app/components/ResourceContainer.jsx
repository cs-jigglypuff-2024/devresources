import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage   from './PageContainers/HomePage';
import TagPage    from './PageContainers/TagPage';
import SearchPage from './PageContainers/SearchPage';
import FolderPage from './PageContainers/FolderPage';
import './views_styles.scss';
function ResourcesContainer() {
  //parent container for router that chooses between pages

  return (
    <div className="resourcesContainer">
      <Routes>
        <Route path="/" element={<HomePage/>}   />
        <Route path="/tag" element={<TagPage/>}    />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/folder" element={<FolderPage/>} />
      </Routes>
    </div>

  )
}

export default ResourcesContainer