var router = require('express').Router();
var User = require('./api/users/user.model.js')

router.post('/', function (req, res, next) {
  User.findOne({
    where: req.body
  })
    .then(function (user) {
      if (user) {
        req.session.userId = user.id;
        res.sendStatus(204);
      }
      else res.sendStatus(401);
    })
  .catch(next);
});

module.exports = router;
