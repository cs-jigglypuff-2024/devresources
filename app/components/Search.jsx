import React from 'react';

// When searching, return the ids of any resources with that in the title (limit 20)

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
