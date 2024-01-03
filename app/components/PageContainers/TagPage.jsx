import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RowView from '../ViewComponents/RowView';

function TagPage() {
  const tag = useLocation().state.tag;
  const [newCards, setNewCards] = useState([{}]);
  const trendingCards = [{}];

  useEffect(() => {
    console.log('runnning useEffect');

    // get new
    fetch(`/search/tag`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tag, type: 'new', num: 10 }),
    })
      .then((res) => res.json())
      .then((ids) => {
        console.log('Returned ids:', ids);

        fetch('/resources', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ids }),
        })
          .then((res) => res.json())
          .then((resArr) => {
            console.log('NEW:', resArr);
            setNewCards(resArr);
          });
      });

    // get trending
  }, [tag]);

  return (
    <div>
      <h1>{tag}</h1>
      <RowView cards={newCards} title='NEW' />
      {/* <RowView cards={trendingCards} title='TRENDING' /> */}
    </div>
  );
}

export default TagPage;
