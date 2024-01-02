const db = require('./model.js');

const queries = {};

// Input: a search query string
// Output: returns array of ids of resources with the string in the title
queries.search = async (str) => {
  const query = `
    SELECT id
    FROM resources
    WHERE title LIKE $1;
  `;
  values = [`%${str}%`];

  const result = await db.query(query, values);
  console.log(result);
  const ids = result.rows;
  console.log('query result:', ids);
  return ids;
};

module.exports = queries;
