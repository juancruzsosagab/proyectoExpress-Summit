var express = require('express');
var router = express.Router();
var userController = require("../controllers/usersControllers")

/*Routes*/

/* Get all users*/ 

router.get('/', userController.getAll);

/* Get user by ID*/ 

router.get('/:id', userController.getById);

/* Update user*/ 

router.patch('/:id', userController.update);

/* Delete user*/ 

router.delete('/:id', userController.delete);

module.exports = router;
