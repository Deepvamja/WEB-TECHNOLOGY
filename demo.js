const mongoose = require("mongoose");

const schema = mongoose.Schema({
    Facultyname:String,
    Facultydepartment:String,
    Facultyage:Number

});

module.exports = mongoose.model("Faculty",schema);