var express = require('express');
var router = express.Router();
var userController = require("../controllers/usersControllers")

/* GET users listing. */
router.get('/', userController.getAll);

router.post('/', userController.create);

router.put('/:id', function(req, res, next) {
  console.log(req.params.id);
  res.send('respond with a resource');
});

router.delete('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
