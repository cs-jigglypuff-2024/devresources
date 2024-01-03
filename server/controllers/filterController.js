const query = require('../queries');

const filterController = {};

filterController.search = (req, res, next) => {
  let { searchStr } = req.params;
  searchStr = searchStr.toLowerCase();
  console.log('Search Requested for:', searchStr);
  query.titleSearch(searchStr).then((ids) => {
    console.log('Search complete');
    console.log('Found ids:', ids);
    res.locals.ids = ids;
    return next();
  });
};

filterController.getResources = async (req, res, next) => {
  const { ids } = req.body;
  console.log('entered getResources:', ids);
  const resources = [];
  // For each resource id, query the databse and add the returned resource object to the cards object
  for (const id of ids) {
    let resource = await query.getResource(id);
    resources.push(resource);
  }

  res.locals.resources = resources;
  return next();
};

module.exports = filterController;
