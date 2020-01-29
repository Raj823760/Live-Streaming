const router = require('express').Router();
const googleAuth = require('./config/googleApiConfig');
const search = require('./Search/search.server');

module.exports = (app) => {
  app.get('/url', (req, res) => {
    res.json(googleAuth.googleAuth());
  });
  // Search Route
  app.get('/search/:sessionId/:keyword', authenticate, search.sessionSearch);
  app.use('/auth', [
    router.get('/google-auth', async (req, res) => {
      try {
        console.log('res: ', req.query.code);
        const data = await googleAuth.getData(req.query.code);
        res.send(data);
      } catch (error) {
        console.log(error)
      }
      
    })
  ]);
}

function authenticate(req, res, next) {
  console.log('Inside Authticate', req.headers);
}