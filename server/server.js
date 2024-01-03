const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();
const PORT = 3000;

const filterController = require('./controllers/filterController');
const resourceController = require('./controllers/resourceController');

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

// route handler to respond with main app
app.get('/', (req, res) => {
  console.log('accessing');
  return res.status(200).sendFile(path.join(__dirname, '../app/index.html'));
});

app.get('/search/:searchStr', filterController.search, (req, res) => {
  res.status(200).json(res.locals.ids);
});

app.post('/resources', filterController.getResources, (req, res) => {
  console.log('resources:', res.locals.resources);
  res.status(200).json(res.locals.resources);
});

app.post('/newResource', resourceController.add, (req, res) => {
  console.log('end of adding new resource');
  res.status(200).json({response: 'successfully added'});
})

// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => {
  return res.sendStatus(404);
});

// global error handling middleware
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// initialize port listening
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
