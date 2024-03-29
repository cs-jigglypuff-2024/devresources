import React, { useState, useEffect } from 'react';
import GridView from '../ViewComponents/GridView';
import { useLocation } from 'react-router-dom';

function SearchPage() {
  const [cards, setCards] = useState([]);

  // useLocation gets the state properties passed into the useNavigate hook
  const state = useLocation().state;
  const ids = state.ids;
  console.log('Switched to search page');
  console.log('IDs:', ids);

  useEffect(() => {
    // get an array of objects from the server
    fetch('/resources', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ids }),
    })
      .then((res) => res.json())
      .then((resArr) => {
        setCards(resArr);
      });
  }, [ids]);

  return (
    <div>
      <GridView cards={cards} title={'search results:'}/>
    </div>
  );
}

export default SearchPage;
