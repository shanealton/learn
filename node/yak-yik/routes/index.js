var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//create-zone
router.get('/create-zone', function(req, res, next) {
  res.render('create-zone', null);
});

//create-comment
router.get('/create-comment', function(req, res, next) {
  res.render('create-comment', null);
});

module.exports = router;
