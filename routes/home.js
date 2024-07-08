//HOME
const express = require('express')
const router=express.Router();
router.get('/home',(req,res,next)=>{
    res.send(`<h1>THIS IS YOUR HOME PAGE API</h1>`)
})
module.exports=router;