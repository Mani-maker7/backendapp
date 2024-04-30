const mongoose = require("mongoose")

const studentschema = new mongoose.Schema({
    studentid:{
     type: Number,
    required: true,
    unique: true
    },
    studentname: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required:true,
      enum: ['male', 'female', 'others']
    },
    dateofbirth: {
      type: String,
      required: true
    },
    program: {
        type: String,
        required: true,
        enum: ['BTECH','MTECH','AGRI','BBA','MBA']
      },
      department: {
        type: String,
        required: true,
       enum: ['CSE-HONORS','CSE-Reg','CSIT','AIDS','ECE'] 
      },
      semester: {
        type: String,
        required: true,
     enum: ['ODD','EVEN']
       },
   year: {
       type: String,
       required: true
     }, 
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      default:"pro04"
    },
    contact:{
      type: Number,
      required: true,
      unique: true
    }
    
  });

const student = mongoose.model('student', studentschema);

module.exports = student;