const query = require('../queries');

const resourceController = {};

resourceController.add = (req, res, next) => {
  const { title, url, description } = req.body;
  const obj = {}
  obj.title = title
  obj.url = url
  obj.description = description
  obj.clicks = 0
  obj.date_added = '2024/01/03'//TODO: obj.date_added must be string in this format: '2000/12/10'
  console.log(`Adding:\n`, obj);
  query.newResource(obj)
    .then(() => {
      console.log('Add complete');
      return next();
    });
};


module.exports = resourceController;
