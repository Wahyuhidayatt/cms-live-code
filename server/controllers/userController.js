'use strict'

var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passwordHash = require('password-hash');
let methods = {}

methods.getAllUsers = function (req,res,next) {
  User.find({})
  .populate('articles')
  .exec(function (err, user) {
    if (err) {
      res.json(err)
    }else{
      res.json({
        data : user
      })
    }
  })
}
methods.update = function(req, res, next) {
    User.findById(req.params.id, function(err, result) {
        if (err) res.send(err)
        else {
            result.username = req.body.username,
            result.email = req.body.email,
            result.password = passwordHash.generate(req.body.password),
            result.save(),
            res.send(result)
        }
    })
}
methods.delete = function(req, res) {
  User.findByIdAndRemove(req.params._id, function (err, userData) {
    var response = {
        message: "successfully deleted",
        id : userData._id
    };
    res.send(response);
  });
}
methods.getOne = function (req, res, next) {
  User.find({
    _id: req.params.id
  })
    .populate('articles')
    .then(function (user) {
      res.send(user)
    })
}


module.exports = methods
