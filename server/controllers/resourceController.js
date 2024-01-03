const query = require('../queries');

const resourceController = {};

resourceController.add = (req, res, next) => {
  // creating and formatting current date
  let objectDate = new Date()
  let day = objectDate.getDate();
  if (day < 10) { day = `0${day}` }
  let month = objectDate.getMonth() + 1;
  if (month < 10) { month = `0${month}` }
  let year = objectDate.getFullYear();
  const dateStr = `${year}/${month}/${day}`

  const { title, url, description } = req.body;
  const obj = {}
  obj.title = title
  obj.url = url
  obj.description = description
  obj.clicks = 0
  obj.date_added = dateStr
  console.log(`Adding:\n`, obj);
  query.newResource(obj)
    .then(() => {
      console.log('Add complete');
      return next();
    });
};

resourceController.getTags = (req, res, next) => {
  console.log('Getting tags from db...');
  query.getTags()
    .then((data) => {
      console.log('data received');
      res.locals.tags = data;
      return next();
    });
};


module.exports = resourceController;
