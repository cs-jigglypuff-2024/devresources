const countController = {}
const queries = require('../queries')

countController.increament = (req, res, next) =>{

  console.log('HIT HIT HIT')
  queries.incrementResourceCount(req.body.id)
  return next()

}

module.exports = countController;