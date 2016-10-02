var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/run', function(req, res){
	console.log('hello world run');
});

module.exports = router;
