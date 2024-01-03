import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [search, setSearch] = useState(false);
  const [ids, setIds] = useState([]);
  const navigate = useNavigate();

  // This will navigate to the SearchPage component after the searchHandler updates the ids.
  useEffect(() => {
    if (search) {
      navigate('/search', { state: { ids } });
    }
  }, [ids]);

  const searchHandler = (e) => {
    e.preventDefault();
    const searchStr = document.getElementById('query').value;
    console.log('Searching for', searchStr);

    //get ids of resources that match submitted string
    fetch(`/search/${searchStr}`)
      .then((res) => res.json())
      .then((ids) => {
        console.log(ids);
        setIds(ids);
        // setIds([1, 2, 3]);
        setSearch(true);
      });
  };

  const field = (
    <form onSubmit={searchHandler}>
      <input type='text' id='query' name='query' placeholder='search' />
    </form>
  );

  return field;
};

export default Search;
