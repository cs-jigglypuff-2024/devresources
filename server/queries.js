const db = require('./model.js');

/* These are the queries used to create our tables:

Used to create users table:

	“CREATE TABLE users (id bigserial, username varchar, PRIMARY KEY (id))

Used to create tags table:

	“CREATE TABLE tags (id bigserial, name varchar(255), PRIMARY KEY(id))”

Used to create resources table:

	“CREATE TABLE resources (id bigserial, title varchar, url varchar, description varchar, clicks bigint, date_added date, PRIMARY KEY (id))”

Used to create folders table with ‘user_id’ as ‘id’ from users table:

	“CREATE TABLE folders (id bigserial, name varchar(255), PRIMARY KEY (id), user_id bigserial, FOREIGN KEY (user_id) REFERENCES users(id))”

Used to create user_tag_join table with user_id as ‘id’ from users table and tag_id as ‘id’ from tags table:
  
  “CREATE TABLE user_tag_join (user_id bigserial, tag_id bigserial, FOREIGN KEY (user_id) REFERENCES users(id), FOREIGN KEY (tag_id) REFERENCES tags(id), PRIMARY KEY (user_id, tag_id))”

Used to create resource_tag_join table with resource_id as ‘id’ from resources table and tag_id as ‘id’ from tags table:

	“CREATE TABLE resource_tag_join (resource_id bigserial, tag_id bigserial, FOREIGN KEY (resource_id) REFERENCES resources(id), FOREIGN KEY (tag_id) REFERENCES tags(id), PRIMARY KEY (resource_id, tag_id))”

Used to create folder_resource_join with folder_id as ‘id’ from folders and resource_id as ‘id’ from resources:

	“CREATE TABLE folder_resource_join (id bigserial, folder_id bigserial, resource_id bigserial, PRIMARY KEY(id), FOREIGN KEY (folder_id) REFERENCES folders(id), FOREIGN KEY (resource_id) REFERENCES resources(id))”
  
!!!!USED TO DELETE ALL TABLES!!!!	

  “DO $$ DECLARE rec RECORD; BEGIN FOR rec IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP EXECUTE 'DROP TABLE IF EXISTS ' || rec.tablename || ' CASCADE'; END LOOP; END $$;”

*/


const queries = {};

// Input: a search query string
// Output: returns array of ids of resources with the string in the title
queries.titleSearch = async (str) => {
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

// Input 
queries.increamentResourceCount = async (str) => {

};

module.exports = queries;
