
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const faculty = require("./demo.js");


mongoose
        .connect("mongodb+srv://DeepVamja:Deepvamja2211@cluster0.n07en.mongodb.net/")
        .then(()=>{
            const express = require ("express");
            const app = express();
            app.use(bodyParser.urlencoded({extended:false}));

            
        app.listen(2000,function(){
            console.log("server started at 2000 port");
        })
        })
