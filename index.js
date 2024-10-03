const http = require('http');
const port = 5000;

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-type','text/html');
    res.end('hello world \n');

});

server.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}/`);
});

