var express = require('express');
var router = express.Router();
var userController = require("../controllers/usersControllers")

/*Routes*/

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Signup */

router.post('/signup', userController.create);

/* Login */

router.post('/login', userController.validate);

module.exports = router;
