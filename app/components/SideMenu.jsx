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
      <Tag tag='React' />
      <Tag tag='interview-prep' />
      <Tag tag='Javascript' />
    </div>
  );
}

export default SideMenu;
