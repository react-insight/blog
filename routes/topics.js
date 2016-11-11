var express = require('express');
var router = express.Router();
var topics = [{
  'name': 'node',
  'description': 'noder'
},{
  'name': 'react',
  'description': 'reactok',
},{
  'name': 'css3',
  'description': 'reactCss',
}];
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('topics',{title:'topics',topics:topics});
});

module.exports = router;
