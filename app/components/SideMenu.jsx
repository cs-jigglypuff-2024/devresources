import React from 'react';
import './views_styles.scss';
import Tag from './Tag';

function SideMenu() {
  return (
    <div id='sideMenu'>
      <Tag tag='random' />
      <Tag tag='interview-prep' />
      <Tag tag='webdev' />
    </div>
  );
}

export default SideMenu;
