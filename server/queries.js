const db = require('./model.js');

const queries = {};

// Input: a search query string
// Output: returns array of ids of resources with the string in the title
queries.search = async (str) => {
  const query = `
    SELECT id
    FROM resources
    WHERE title LIKE '%$1%';
  `;
  values = [str];

  const result = await db.query(query, values);
  const ids = result.rows[0];
  console.log('query restult:', ids);
};

module.exports = queries;
