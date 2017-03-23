'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema

let userSchema = new Schema({
  username : String,
  email : String,
  password : String,
  articles : [{type : Schema.Types.ObjectId, ref : 'Articles'}]
},{
  timestamps : true
})

let Users = mongoose.model('Users', userSchema)

module.exports = Users
