'use strict'

var express = require('express');
var router = express.Router()
var User = require('../models/user')
var Article = require('../models/article')
let methods = {}

methods.create = function (req,res,next) {

  Article.create(req.body, function (err,response) {
    if (err) {
      res.json({
        msg : err
      })
    }else{
      User.findByIdAndUpdate(response._author,
        { $push: { "articles": response._id} },
        {safe: true, upsert: true, new: true},
        function (err, data) {
          if (err) {
            res.json(err)
          }else{
            res.json({data: data})
          }
      })
      res.json({
        msg : response
      })
    }
  })
}

module.exports = methods
