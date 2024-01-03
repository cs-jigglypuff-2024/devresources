const queries = require('../queries')

const cookieController = {}

cookieController.addUser = async (req, res, next) => {

  let token = res.locals.token 

  try {
    const userResponse = await fetch('https://api.github.com/user', {
      headers: {
        'Authorization': `token ${token}`
      }
    });

    const userData = await userResponse.json();
    console.log('this is user data: ', userData)
    if (userData.login) {
      const username = userData.login

      const user_id = await queries.newUser(username)
      console.log("user_id", user_id)
      res.cookie('username', username);
      res.cookie('user_id', user_id);
      return next();
      
    } else {
      res.status(400).send('Error retrieving GitHub user data');
    }
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    res.status(500).send('Internal Server Error');
    return
  }
};

module.exports = cookieController