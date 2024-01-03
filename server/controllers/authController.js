const authController = {}

const dotenv = require('dotenv');
dotenv.config();

authController.token = async (req, res, next) => {

  const code = req.query.code;

console.log('this is code: ', code)

  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      client_id: 'da37f9b2070e3aad5719',
      client_secret: '28b46327172c0adf903285143f31a8857350bed8',
      code: code
    })
  });
  const data = await response.json();

  console.log('this is data', data)
  if (data.access_token) {
    res.locals.token = data.access_token
    return next()
  } else {
    res.send('Error retrieving access token');
  }
};


module.exports = authController