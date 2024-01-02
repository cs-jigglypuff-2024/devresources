const db = require('./model.js');

/* These are the queries used to create our tables:

Used to create users table:

	“CREATE TABLE users (id biting, username varchar, PRIMARY KEY (id))

Used to create folders table with ‘user_id’ as ‘id’ from users table:

	“CREATE TABLE folders (id bigint, name varchar(255), PRIMARY KEY (id), user_id bigint, FOREIGN KEY (user_id) REFERENCES users(id))”

Used to create user_tag_join table with user_id as ‘id’ from users table and tag_id as ‘id’ from tags table:

  “CREATE TABLE user_tag_join (user_id bigint, tag_id bigint, FOREIGN KEY (user_id) REFERENCES users(id), FOREIGN KEY (tag_id) REFERENCES tags(id), PRIMARY KEY (user_id, tag_id))”

Used to create resources table:

	“CREATE TABLE resources (id bigint, title varchar, url varchar, description varchar, clicks bigint, date_added date, PRIMARY KEY (id))”

Used to create resource_tag_join table with resource_id as ‘id’ from resources table and tag_id as ‘id’ from tags table:

	“CREATE TABLE resource_tag_join (resource_id bigint, tag_id bigint, FOREIGN KEY (resource_id) REFERENCES resources(id), FOREIGN KEY (tag_id) REFERENCES tags(id), PRIMARY KEY (resource_id, tag_id))”

Used to create folder_resource_join with folder_id as ‘id’ from folders and resource_id as ‘id’ from resources:

	“CREATE TABLE folder_resource_join (id bigint, folder_id bigint, resource_id bigint, PRIMARY KEY(bigint), FOREIGN KEY (folder_id) REFERENCES folders(id), FOREIGN KEY (resource_id) REFERENCES resources(id))”
  
*/


const queries = {};

// Input: a search query string
// Output: returns array of ids of resources with the string in the title
queries.search = async (str) => {
  const query = `
    SELECT id
    FROM resources
    WHERE title LIKE $1
    LIMIT 30;
  `;
  values = [`%${str}%`];

  const result = await db.query(query, values);
  console.log(result);
  const ids = result.rows;
  console.log('query result:', ids);
  return ids;
};

module.exports = queries;
