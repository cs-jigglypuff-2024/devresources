import React from 'react';

const Search = () => {
  const searchHandler = (e) => {
    e.preventDefault();
    console.log('Searching for', document.getElementById('query').value);
  };

  const field = (
    <form onSubmit={searchHandler}>
      <input type='text' id='query' name='query' placeholder='search' />
    </form>
  );

  return field;
};

export default Search;
