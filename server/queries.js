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
    WHERE LOWER(title) LIKE $1
    LIMIT 30;
  `;
  const values = [`%${str}%`];

  const result = await db.query(query, values);
  const idObj = result.rows;
  const ids = idObj.map((el) => Number(el.id));
  console.log('query result:', ids);
  return ids;
};

queries.incrementResourceCount = async (str) => {
  const query = 'UPDATE resources SET clicks = clicks + 1 WHERE id = $1';

  const value = [str];

  await db.query(query, value);

  return;
};

queries.newResource = async (obj) => {
  const query =
    'INSERT INTO resources (title, url, description, clicks, date_added) VALUES ($1, $2, $3, $4, $5)';

  const values = [
    obj.title,
    obj.url,
    obj.description,
    obj.clicks,
    obj.date_added,
  ];

  //obj.date_added must be string in this format: '2000/12/10'

  await db.query(query, values);
  return;
};

queries.newUser = async (username) => {
  const query = 'INSERT INTO users (username) VALUES ($1) RETURNING id';

  const value = [username];

  const result = await db.query(query, value);
  const id = result.rows[0].id;
  console.log(id);
  return id;
};

queries.newUser('Aaron');

queries.newTag = async (str) => {
  const query = 'INSERT INTO tags (name) VALUES ($1)';

  const value = [str];

  await db.query(query, value);
  return;
};

queries.newFolder = async (str) => {
  const query = 'INSERT INTO tags (name) VALUES ($1)';

  const value = [str];

  await db.query(query, value);
  return;
};

queries.addTagToUser = async (obj) => {
  const query = 'INSERT INTO user_tag_join (user_id, tag_id) VALUES ($1, $2)';

  const values = [obj.userId, obj.tagId];

  await db.query(query, values);
  return;
};

queries.addTagToResource = async (obj) => {
  const query =
    'INSERT INTO resource_tag_join (resource_id, tag_id) VALUES ($1, $2)';

  const values = [obj.resourceId, obj.tagId];

  await db.query(query, values);
  return;
};

queries.addResourceToFolder = async (obj) => {
  const query =
    'INSERT INTO folder_resource_join (folder_id, resource_id) VALUES ($1, $2)';

  const values = [obj.folderId, obj.resourceId];

  await db.query(query, values);
  return;
};

queries.getResource = async (num) => {
  const query = 'SELECT * FROM resources WHERE id = $1';
  const value = [num];

  const result = await db.query(query, value);
  const resource = result.rows[0];
  console.log('This is response from getResource query: ', resource);
  return resource;
};

queries.getResourceIdsFromFolder = async (num) => {
  const query = `SELECT resource_id FROM folder_resource_join WHERE folder_id = $1`;

  const value = [num];

  const result = await db.query(query, value);
  console.log('This is response from getResourceIdsFromFolder query: ', result);
  return result;
};

queries.getTagIdsFromUsers = async (num) => {
  const query = 'SELECT tag_id FROM user_tag_join WHERE user_id = $1';

  const value = [num];

  const result = await db.query(query, value);
  console.log('This is response from getTagIdsFromUsers query: ', result);
  return result;
};

queries.getResourceIdsByTag = async (tag, type, limit) => {
  const query1 = `SELECT id FROM tags WHERE LOWER(name) = $1`;
  const value1 = [tag];
  const result1 = await db.query(query1, value1);
  const tagId = result1.rows[0].id;
  console.log('tagId', tagId);

  let query2;
  if (type === 'new') {
    query2 = `SELECT resource_id FROM resource_tag_join WHERE tag_id = $1 ORDER BY resource_id DESC LIMIT $2`;
  } else if (type === 'trending') {
    // query2 = `SELECT resource_id FROM resource_tag_join WHERE tag_id = $1 ORDER BY clicks DESC LIMIT $2`;
    query2 = `SELECT resource_id FROM resource_tag_join WHERE tag_id = $1 LIMIT $2`;
  }

  const values2 = [tagId, limit];
  const result2 = await db.query(query2, values2);
  console.log('result2:', result2);
  const idObj = result2.rows;
  const ids = idObj.map((el) => Number(el.resource_id));
  console.log('query result:', ids);
  return ids;
};

module.exports = queries;
