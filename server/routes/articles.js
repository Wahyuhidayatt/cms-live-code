'use strict'

var express = require('express');
var router = express.Router();
var articleController = require('../controllers/articleController')

router.post('/', articleController.create);

module.exports = router
