const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const DB_URI = process.env.PG_URI;

const db = new Pool({
  connectionString: DB_URI,
});

db.connect((err, client, done) => {
  if (err) {
    console.error('Error connecting to the database', err);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = db;
