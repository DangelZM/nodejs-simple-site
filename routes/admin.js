var express = require('express');
var router = express.Router();
var controller = require('../controllers/admin')();

/* GET users listing. */
router.get('/', controller.index);

router.get('/article', function(req, res, next) {
  res.render('index', { title: 'Article' });
});

router.post('/article', function(req, res, next) {
  res.render('index', { title: 'Form Processing...' });
});



module.exports = router;
