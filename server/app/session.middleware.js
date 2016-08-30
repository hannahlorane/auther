var router = require('express').Router();

var session = require('express-session');

router.use(session({
  secret: 'kendricklamar'
}))

module.exports = router;
