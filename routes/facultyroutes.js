//faculty routes

const facultycontroller = require("../controllers/facultycontroller")

const express = require("express")
const facultyrouter  = express.Router()


facultyrouter.post("/checkfacultylogin",facultycontroller.checkfacultylogin)

facultyrouter.post("/addassignment",facultycontroller.addassignment)
facultyrouter.get("/viewassignments",facultycontroller.viewassignments)
facultyrouter.get("/assignmentimage/:filename",facultycontroller.assignmentimage)
facultyrouter.put("/updatefacultyprofile",facultycontroller.updatefacultyprofile)
facultyrouter.get("/facultyprofile/:email",facultycontroller.facultyprofile)
facultyrouter.get("/changefacultypwd/:email",facultycontroller.facultyprofile)










module.exports = facultyrouter