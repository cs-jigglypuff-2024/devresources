import React from 'react';
import './views_styles.scss';
import Tag from './Tag';

function SideMenu() {
  const clickHandler = () => {
    const tag = e.target.id;
    console.log(tag);
  };

  return (
    <div id='sideMenu'>
      <Tag tag='react' />
      <Tag tag='interview-prep' />
      <Tag tag='javascript' />
    </div>
  );
}

export default SideMenu;
