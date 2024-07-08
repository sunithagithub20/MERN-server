const mongoose=require('mongoose')


const authorSchema=mongoose.Schema({
    _id:{
        type:String,
        required:true, 
    },
    name:{
        type:String,
        required:true,
    },
    age:{
        type:String,
        required:true,
    },
    total_books:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }


})
module.exports=mongoose.model('Author',authorSchema);
