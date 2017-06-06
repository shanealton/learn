var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create-zone', function(req, res, next) {
  res.render('create-zone', null);
});

module.exports = router;
