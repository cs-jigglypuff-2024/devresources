import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage   from './PageContainers/HomePage';
import TagPage    from './PageContainers/TagPage';
import SearchPage from './PageContainers/SearchPage';
import FolderPage from './PageContainers/FolderPage';

function ResourcesContainer() {
  //parent container for router that chooses between pages

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}   />
        <Route path="/tag" element={<TagPage/>}    />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/folder" element={<FolderPage/>} />
      </Routes>  
      ResourceContainer
    </div>

  )
}

export default ResourcesContainer