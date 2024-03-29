const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();
const PORT = 3000;

const filterController = require('./controllers/filterController');
const authController = require('./controllers/authController');
const cookieController = require('./controllers/cookieController');
const resourceController = require('./controllers/resourceController');
const userController = require('./controllers/userController');
const countController = require('./controllers/countController');

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

// route handler to respond with main app
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../app/index.html'));
});

app.post(
  '/addTagToUser',
  userController.addTagToUser,
  (req, res) => {
    console.log('Added tag');
    res.sendStatus(200);
  }
);

// Temporary seeding of cookies with a test user until login is done
app.get('/testUser', (req, res) => {
  console.log('adding cookies');
  res.cookie('user_id', '2');
  res.cookie('username', 'PeterThePenguin');
  return res.sendStatus(200);
});

app.get('/username', (req, res) => {
  const username = req.cookies.username;
  return res.status(200).json(username);
});

// Return list of tags a user follows
app.get('/userTags', userController.getTags, (req, res) => {
  const tags = res.locals.tags;
  return res.status(200).json(tags);
});

// Find resource ids for resources with a given string in the title
app.get('/search/:searchStr', filterController.search, (req, res) => {
  res.status(200).json(res.locals.ids);
});

app.post('/count', countController.increament, (req, res) => {
  res.status(200).send('done');
})
// Find resource ids for resources with a given tag
app.post('/search/tag', filterController.searchTag, (req, res) => {
  res.status(200).json(res.locals.ids);
});

// Find resources based on an array of ids
app.post('/resources', filterController.getResources, (req, res) => {
  console.log('resources:', res.locals.resources);
  res.status(200).json(res.locals.resources);
});

app.get(
  '/callback',
  authController.token,
  cookieController.addUser,
  (req, res) => {
    res.status(200).redirect('/');
  }
);

app.get(
  '/callback',
  authController.token,
  cookieController.addUser,
  (req, res) => {
    res.status(200).redirect('/');
  }
);

// Add new resource to database
// app.post('/newResource', resourceController.add, (req, res) => {
//   console.log('end of adding new resource');
//   res.status(200).json({response: 'successfully added'});
// })
app.post('/newResource', (req, res) => {
  console.log('end of adding new resource');
  res.status(200).json({ response: 'successfully added' });
});

// Get all tags
app.get('/getTags', resourceController.getTags, (req, res) => {
  console.log('done getting tags');
  res.status(200).json(res.locals.tags);
});

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
