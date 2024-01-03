import React, { useState } from 'react';
import ResourcesContainer from './ResourceContainer';
import Search from './Search';
import AddResourceModal from './AddResourceComponents/AddResourceModal';


export default function App() {
  const [showAddResource, setShowAddResource] = useState(false)

  return (
    <>
      <div className='header'>
        <h1>App header</h1>
        <Search />
        <button className="addResourceButton" onClick={()=>setShowAddResource(true)}>Add Resource</button>
        <AddResourceModal open={showAddResource} close={()=>setShowAddResource(false)}/>
      </div>
      
      <ResourcesContainer></ResourcesContainer>
    </>
  );
}
