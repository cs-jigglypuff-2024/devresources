import React from 'react';
import './views_styles.scss';
import Tag from './Tag';

function SideMenu({ tags }) {
  const Tags = tags.map((tag) => <Tag tag={tag} />);

  return <div id='sideMenu'>{Tags}</div>;
}

export default SideMenu;
