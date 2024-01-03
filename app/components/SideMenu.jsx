import React from 'react';
import { Link } from 'react-router-dom';
import './views_styles.scss';
import Tag from './Tag';

function SideMenu({ tags }) {
  const Tags = tags.map((tag) => <Tag tag={tag} />);

  return (
    <>
      <div id='sideMenu'>{Tags}</div>
      <Link to='/tagsView'>
        <button>See all tags</button>
      </Link>
    </>
  );
}

export default SideMenu;
