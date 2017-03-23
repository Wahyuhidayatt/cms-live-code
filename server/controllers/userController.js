'use strict'

var express = require('express');
var router = express.Router()
var User = require('../models/user')
let methods = {}

// methods.create = function (req,res,next) {
//   let user = {
//     username : req.body.username,
//     email : req.body.email,
//     password : req.body.password,
//     articles : []
//   }
//
//   User.create(user, function (err, response) {
//     console.log(response);
//     if(err){
//       res.send({
//         msg : "something went wrong"
//       })
//     }else{
//       res.send({
//         msg : "user created"
//       })
//     }
//   })
// }

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

module.exports = methods
