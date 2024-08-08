const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const port=5000;

app.use(bodyParser.urlencoded());

const student = [
    {
        id:345,
        name:'vivek',
        email:'vivek@darshan.ac.in',
        age:26,
        batch:'B'
    },
    {
        id:291,
        name:'deep',
        email:'deep@darshan.ac.in',
        age:25,
        batch:'A'
    }
];

app.get('/student',(req,res)=>{
    res.send(student);
})

//create
app.get('/student/:id',(req,res)=>{
    const ans = student.find(stu=>stu.id==req.params.id);
    res.send(ans);
});

app.get('/students/:batch',(req,res)=>{
    const ans = student.find(stu=>stu.batch==req.params.batch);
    res.send(ans);
});

// read
app.post('/students/:name/:age/:batch',(req,res)=>{
    student.push(req.params.name);
    res.send("Student added");
});

//update
app.patch('/student/:id/:changeid',(req,res)=>{
    const idToEdit = student.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    student[idToEdit].id=req.params.changeid;
    res.send("student updated");
});

//delete
app.delete('/student/:id',(req,res)=>{
    const idTodelete = student.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    student.splice(idTodelete,2);
    res.send("Student deleted");
});



app.listen(5000,()=>{
    console.log("Server started at 5000");
})