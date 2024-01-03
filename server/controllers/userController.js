const query = require('../queries');

const userController = {};

// Get an array of tag names associated with the logged in user
userController.getTags = async (req, res, next) => {
  const user_id = req.cookies.user_id;
  res.locals.tags = await query.getTagNamesFromUser(user_id);
  return next();
};

// Add tag to a user's tags they are following
userController.addTagToUser = (req, res, next) => {
  const userId = req.cookies.user_id;
  const { tag } = req.body;
  query.addTagByNameToUser(userId, tag);
  return next();
};

module.exports = userController;
