'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema

let articleSchema = Schema({
  title : String,
  content : String,
  _author : {type : Schema.Types.ObjectId, ref : 'Users'}
},{
  timestamps : true
})

let Articles = mongoose.model('Articles', articleSchema)

module.exports = Articles
