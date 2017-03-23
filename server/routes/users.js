'use strict'

var express = require('express');
var router = express.Router();
var userController = require('../controllers/user')
var Controller = require('../controllers/loginController')


router.post('/register',Controller.register);
router.post('/login',Controller.login);
router.post('/decode',DataUsers.decode);




router.post('/', userController.create);
router.get('/', userController.getAllUsers);


module.exports = router
