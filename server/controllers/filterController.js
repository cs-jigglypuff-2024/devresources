const query = require('../queries');

const filterController = {};

filterController.search = (req, res, next) => {
  const { searchStr } = req.params;
  console.log('Search Requested for:', searchStr);
  query.titleSearch(searchStr).then((ids) => {
    console.log('Search complete');
    console.log('Found ids:', ids);
    res.locals.ids = ids;
    return next();
  });
};

module.exports = filterController;
