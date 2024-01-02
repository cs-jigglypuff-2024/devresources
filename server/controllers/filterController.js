const query = require('../queries');

const filterController = {};

filterController.search = (req, res, next) => {
  const { searchStr } = req.params;
  console.log('Search Requested for:', searchStr);
  query.search(searchStr).then((ids) => {
    console.log('Search complete');
    console.log('Found ids:', ids);
    res.locals.ids = ids;
    return next();
  });
};

filterController.getResources = async (req, res, next) => {
  const { ids } = req.body;
  const resources = [];
  // For each resource id, query the databse and add the returned object to the cards object
  for (const id of ids) {
    // TODO: update name based on Jackson's naming
    let resource = await query.getResourceById(id);
    resources.push(resource);
  }

  res.locals.resources = resources;
  return next();
};

module.exports = filterController;
