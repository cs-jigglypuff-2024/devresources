
const fs = require('fs');
const path = require('path');
const csv = require('fast-csv')
const db = require('./model.js');

/**
 * How to use this file:
 *  1. Download a tsv (tab separated values) file
 *  2. Save tsv in server/seed_data folder
 *  3. Update last line in this file to point to the correct tsv and table you want to seed
 *  4. execute using node seedDB.js
 */

insert = async (table, cols, vals) => {
  const query = `
    INSERT INTO ${table} (${cols})
    VALUES ${vals}
  `;
  console.log(query);
  const result = await db.query(query);
  console.log(result);
  return
};

const seed = (file, table) => {
  let headers = '';
  let values = ''
  fs.createReadStream(path.resolve(__dirname, 'seed_data', file))
  .pipe(csv.parse({headers: true, delimiter: '\t'}))
    .on('error', error => console.log(error))
    .on('data', row => {
      headers = Object.keys(row).join();
      valuesUnquoted = Object.values(row).map(val => val.replace(`'`,``));
      valuesQuoted = valuesUnquoted.map(val => `'${val}'`);
      valuesJoined = valuesQuoted.join();
      if (values.length > 0) {
        values = `${values}, \n(${valuesJoined})`
      } else {
        values = `(${valuesJoined})`
      }
    })
    .on('end', () => {
      insert(table, headers, values)
    });
}

// CHANGE BASED ON WHAT DATA NEEDS TO BE SEEDED
seed('resource_tag_join.tsv', 'resource_tag_join'); 

