import React from 'react';

// When searching, return the ids of any resources with that in the title (limit 30)

const Search = () => {
  const searchHandler = (e) => {
    e.preventDefault();
    const searchStr = document.getElementById('query').value;
    console.log('Searching for', searchStr);
    //get request to server qith search query
    fetch(`/search/${searchStr}`)
      .then((res) => res.json())
      .then((ids) => {
        console.log(ids);
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
