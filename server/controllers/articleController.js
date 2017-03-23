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
            // res.json({data: data})
          }
      })
      res.json({
        msg : response
      })
    }
  })
}
methods.getAll = function (req, res, next) {
  Article.find({})
   .populate('_author')
   .exec(function(err, article) {
     if(err){
       res.json(err)
     }else{
       res.json({
         data : article
       })
     }
   })
}
methods.update = function(req, res, next) {
    Article.findById(req.params.id, function(err, result) {
        if (err) res.send(err)
        else {
            result.title = req.body.title,
            result.content = req.body.content,
            result._author = req.body._author
            result.save(),
            res.send(result)
        }
    })
}
methods.getOne = function (req, res, next) {
  Article.find({
    _id: req.params.id
  })
    // .populate('_author')
    .then(function (articles) {
      res.json({
        data : articles
      })
    })
}
methods.delete = function(req, res) {
  Article.findByIdAndRemove(req.params._id, function (err, articleData) {
    var response = {
        message: "successfully deleted",
        id : articleData._id
    };
    res.send(response);
  });
}

module.exports = methods
