const mongoose = require("mongoose")

const courseschema = new mongoose.Schema({
   
      department: {
        type: String,
        required: true,
       enum: ['CSE-HONORS','CSE-Reg','CSIT','AIDS','ECE'] 
      },
     academicyear: {
        type: String,
        required: true,
       enum: ['23-24','24-25'] 
      },
      semester: {
        type: String,
        required: true,
     enum: ['ODD','EVEN']
       },
   year: {
       type: Number,
       required: true
     }, 
    coursecode: {
      type: String,
      required: true,
      unique: true
    },
    
    coursetitle:{
      type: String,
      required: true,
      unique: true
    }
    
  });

const course = mongoose.model('course', courseschema);

module.exports = course;