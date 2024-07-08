//this is my Mongodb Schema /model/userSchema.js
const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    ImageUrl:{type:String,required:true}, 
    price:{type:Number,required:true},
    name:{type:String,required:true},
    description:{type:String,required:true}
})
module.exports= mongoose.model('User',productSchema);