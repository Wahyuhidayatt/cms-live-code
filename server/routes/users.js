'use strict'

var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')
var Controller = require('../controllers/loginController')
var DataUsers = require('../helpers/helper')


router.post('/register',Controller.register);
router.post('/login',Controller.login);
router.post('/decode',DataUsers.decode);




// router.post('/', Controller.);
router.get('/', userController.getAllUsers);


module.exports = router
