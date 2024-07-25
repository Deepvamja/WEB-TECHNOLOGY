const http = require('http');
const port=7172;
const fs = require('fs');
const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-type','text/html');
    if(req.url=='/home'){
       fs.readFile('./a.html',(err,data)=>{
             res.end(data);
       });
    }
    else if(req.url=='/contactus'){
        fs.readFile('./b.html',(err,data)=>{
              res.end(data);
        });
     }
    else{
      res.end('hello world');
    }
});

server.listen(port,()=>{
    console.log(`Server is Running at http://localhost:${port}/`);

})