var express = require('express');
var router = express.Router();

var User = require('../model/user.js');

/* GET ALL UserS */
router.get('/', function(req, res, next) {
    User.find(function (err, users) {
      if (err) return next(err);
      res.json(users);
    });
  });

/* GET SINGLE User BY ID */
router.get('/:id', function(req, res, next) {
    User.findById(req.params.id, function (err, user) {
      if (err) return next(err);
      res.json(user);
    });
  });
  
  /* SAVE User */
  router.post('/', function(req, res, next) {
    User.create(req.body, function (err, user) {
      if (err) return next(err);
      res.json(user);
    });
  });
  
  /* UPDATE User */
  router.put('/:id', function(req, res, next) {
    User.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
      if (err) return next(err);
      res.json(user);
    });
  });
  
  /* DELETE User */
  router.delete('/:id', function(req, res, next) {
    User.findByIdAndRemove(req.params.id, req.body, function (err, user) {
      if (err) return next(err);
      res.json(user);
    });
  });
  
  module.exports = router;