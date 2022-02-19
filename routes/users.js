var express = require('express');
var router = express.Router();
var userController = require("../controllers/userControllers")

/* GET users listing. */
router.get('/', userController.getAll);

router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.put('/:id', function(req, res, next) {
  console.log(req.params.id);
  res.send('respond with a resource');
});

router.delete('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
