import React from 'react';
import './views_styles.scss';

function Tag({ tag }) {
  const clickHandler = () => {
    console.log('clicked', tag);
    
  };

  return (
    <div className='tag' id={tag} onClick={clickHandler}>
      #{tag}
    </div>
  );
}

export default Tag;
