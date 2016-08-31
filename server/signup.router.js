var router = require('express').Router();

var User = require('./api/users/user.model.js')

router.post('/', function(req, res, next){
  console.log("And then they noticed that the sound was coming... from INSIDE THE ROUTER");
  User.create(req.body)
  .then( function(user){
    req.session.userId = user.id;
    res.sendStatus(204);
  })
  .catch(next);
})

module.exports = router;
