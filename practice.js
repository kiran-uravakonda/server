var http=require('http')
http.createServer((req,res)=>{
    var obj={
        name:"kiran",
        age:20,
        degree:"BTECH"
         }
         res.write(JSON.stringify(obj))
res.end()
}).listen(3000)