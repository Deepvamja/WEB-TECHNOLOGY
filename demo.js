const express = require('express');
const fs =require('fs');
const app = express();
const port=4000;

app.get('/home',function(req,res){
    res.send(`
        <h1>home page</h1>
        <a href="about"><button>about</button></a>
        <a href="contact"><button>contact</button></a>
        `)
});

app.get('/about',function(req,res){
    res.send(`
        <h1>about page </h1>
        <a href="home"><button>home</button></a>
        <a href="contact"><button>contact</button></a>
        `)
});
app.get('/contact',function(req,res){
    res.send(`
        <h1>contact page </h1>
        <a href="home"><button>home</button></a>
        <a href="about"><button>about</button></a>
        `)
});

app.get('/',function(req,res){
    fs.readFile('xyz.txt',(err,data)=>{
        console.log(err)
        console.log(data.toString())
        res.send(data.toString());
    })
});



app.post('/aboutus',function(req,res){
    res.send('hello world from about us');
});

app.put('/contactus',function(req,res){
    res.send('hello world from contact us');
});

app.patch('/patch',function(req,res){
    res.send('hello world from patch ');
});

app.all('/all',function(req,res){
    res.send('hello world from all');
});

app.listen(4000,function(){
    console.log('app.js is listening to htttp://localhost:4000/');
});





