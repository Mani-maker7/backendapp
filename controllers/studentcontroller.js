const Student = require("../models/Student")
// const multer=require('multer')
// const path=require('path')
// const fs=require('fs')


const checkstudentlogin = async (request, response) => 
{
   try 
   {
     const input = request.body
     const student = await Student.findOne(input)
     response.json(student)
   } 
   catch (error) 
   {
     response.status(500).send(error.message);
   }
 };

 


 

const viewassignments = async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

 
    

 const studentprofile = async (request, response) => {
  try {
    const email = request.params.email;
    const student = await Student.findOne({ email });
    if (student) {
      response.json(student);
    } else {
      return response.status(404).send('Student not found with the provided email id');
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};







 module.exports = {checkstudentlogin,studentprofile,viewassignments}