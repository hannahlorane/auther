'use strict';

var router = require('express').Router();

router.use( function (req, res, next) {
  if (!req.session.counter) req.session.counter = 0;
  console.log('counter', ++req.session.counter);
  next();
})

router.use('/users', require('./users/user.router'));

router.use('/stories', require('./stories/story.router'));

module.exports = router;
