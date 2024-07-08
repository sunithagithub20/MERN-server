//this is my Mongodb Schema /model/userSchema.js
const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    _id:{type:String,required:true},
    name:{type:String,required:true}, 
    email:{type:String,required:true},
    password:{type:String,required:true}})
module.exports= mongoose.model('User',UserSchema);