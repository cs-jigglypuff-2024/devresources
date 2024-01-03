import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RowView from '../ViewComponents/RowView';

function TagPage() {
  const tag = useLocation().state.tag;
  const newCards = [];
  const trendingCards = [];

  useEffect(() => {
    // get new
    
    // get trending
  }, [tag]);

  //fetch queries here, prop drill all returns into appropriate row views below.
  return (
    <div>
      <h1>{tag}</h1>
      <RowView cards={newCards} title='NEW' />
      <RowView cards={trendingCards} title='TRENDING' />
    </div>
  );
}

export default TagPage;
