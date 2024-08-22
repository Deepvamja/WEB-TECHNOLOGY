const express = require ('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Faculty = require("./demo.js");


mongoose.connect("mongodb+srv://DeepVamja:deepvamja2211@cluster0.n07en.mongodb.net/")
        .then(()=>{
            console.log("commected with cloud database");

            //const express = require ("express");
            const app = express();
            app.use(bodyParser.urlencoded({extended:false}));

//get all

app.get('/Facultys',async(req,res)=>{
    const ans = await Faculty.find();
    res.send(ans);

});

//get by id

app.get('/Facultys/:id',async(req,res)=>{
    const ans = await Faculty.findone({id:req.params.id});
    res.send(ans);
    
});

//create
app.post('/Facultys',async(req,res)=>{
    Fac = new Faculty({...req.body})
    const ans = await Fac.save();
    res.send(ans);
    
});

//delete
app.delete('/Facultys/:id',async(req,res)=>{
    const ans = await Faculty.deleteOne({id:req.params.id});
    res.send(ans);
    
});

//update
app.patch('/Facultys/:id',async(req,res)=>{
    const Fac = await Faculty.findOne({id:req.params.id});
    Fac.id=req.body.id;
    Fac.name=req.body.name;
    const ans = await Fac.save()
    res.send(ans);
    
})
    
        app.listen(2000,function(){
            console.log("server started at 2000 port");
        })
 })
