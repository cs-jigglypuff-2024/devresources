import React from 'react';
import ResourcesContainer from './ResourceContainer';
import SideMenu from './SideMenu';
import Search from './Search';

export default function App() {
  return (
    <>
      <h1>App header</h1>
      <Search />
      <div class='layout'>
        <SideMenu />
        <ResourcesContainer />
      </div>
    </>
  );
}
