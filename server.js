var express=require('express');
var app=express()
app.get('/:city',(req,res)=>{
   if(req.params.city){
      res.send(`Welcome to ${req.params.city}`)
   }
   else
   {
      res.send("nothing")
   }
})
app.listen(2000,()=>{
    console.log("server running on 2000 port successfully")
})