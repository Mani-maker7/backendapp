const mongoose = require("mongoose")

const facultyschema = new mongoose.Schema({
    facultyid:{
     type: Number,
    required: true,
    unique: true
    },
    facultyname: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required:true,
      enum: ['male', 'female', 'others']
    },
      department: {
        type: String,
        required: true,
       enum: ['CSE-HONORS','CSE-Reg','CSIT','AIDS','ECE'] 
      },
      qualification: {
        type: String,
        required: true,
        enum: ['BTECH','MTECH','PHD']
      },
      designation: {
        type: String,
        required: true,
     enum: ['Prof','Asst Prof','Assoc Prof']
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

const faculty = mongoose.model('faculty', facultyschema);

module.exports = faculty;