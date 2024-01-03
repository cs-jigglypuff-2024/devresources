import React from 'react';
import { useNavigate } from 'react-router-dom';
import './views_styles.scss';

function Tag({ tag }) {
  const navigate = useNavigate();

  const clickHandler = () => {
    console.log('clicked', tag);
    navigate('/tagPage', { state: { tag } });
  };

  return (
    <div className='tag' id={tag} onClick={clickHandler}>
      #{tag}
    </div>
  );
}

export default Tag;
