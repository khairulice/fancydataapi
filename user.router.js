var express = require('express');
var router = express.Router();

/* GET ALL UserS */
router.get('/', function(req, res, next) {
   res.send("Hello API");
  });

  module.exports = router;