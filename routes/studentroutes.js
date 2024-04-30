// student routes

const Student = require('../models/Student'); // Import the Student model

const studentcontroller = require("../controllers/studentcontroller")

const express = require("express")
const router = express.Router();

const studentrouter = express.Router()


router.get('/students', async (req, res) => {
    try {
      const students = await Student.find(); // Retrieve all students from the database
      res.json(students); // Send the list of students as a JSON response
    } catch (error) {
      console.error('Error fetching students:', error);
      res.status(500).send('Internal Server Error');
    }
  });

studentrouter.post("/checkstudentlogin",studentcontroller.checkstudentlogin)
studentrouter.get("/viewassignments",studentcontroller.viewassignments)


module.exports = studentrouter