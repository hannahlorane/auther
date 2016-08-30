var router = require('express').Router();

var User = require('./api/users/user.model.js')

router.post('/', function(req, res, next){
  User.create(req.body)
  .then( function(user){
    req.session.userId = user.id;
    req.sendStatus(204);
  })
  .catch(next);
})

module.exports = router;
