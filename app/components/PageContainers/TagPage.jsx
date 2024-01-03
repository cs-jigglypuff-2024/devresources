import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RowView from '../ViewComponents/RowView';

function TagPage() {
  const tag = useLocation().state.tag;
  const [newCards, setNewCards] = useState([{}]);
  const [trendingCards, setTrendingCards] = useState([{}]);

  useEffect(() => {
    console.log('runnning useEffect');

    // get new
    fetch(`/search/tag`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tag, type: 'new', num: 5 }),
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

            // get trending
            fetch(`/search/tag`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ tag, type: 'trending', num: 5 }),
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
                    console.log('TRENDING:', resArr);
                    setTrendingCards(resArr);
                  });
              });
          });
      });

    //TODO: Check if user is following tag already
  }, [tag]);

  const follow = () => {
    console.log('Now following this tag');
    //TODO: send post request to add this tag to a user's list
    //pug tagName on body
  };

  return (
    <div>
      <h1>{tag}</h1>
      <button onClick={follow}>Follow Tag</button>
      <RowView cards={newCards} title='NEW' />
      <RowView cards={trendingCards} title='TRENDING' />
    </div>
  );
}

export default TagPage;
