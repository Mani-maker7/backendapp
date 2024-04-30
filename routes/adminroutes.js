//admin routes
const admincontroller = require("../controllers/admincontroller")

const express = require("express")
const adminrouter  = express.Router()



adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin)
adminrouter.get("/analysis",admincontroller.analysis)

adminrouter.post("/addstudent",admincontroller.addstudent)
adminrouter.get("/viewstudents",admincontroller.viewstudents)
adminrouter.delete("/deletestudent/:studentid",admincontroller.deletestudent)
adminrouter.put("/changeadminpwd",admincontroller.changeadminpwd)


adminrouter.post("/addfaculty",admincontroller.addfaculty)
adminrouter.get("/viewfaculty",admincontroller.viewfaculty)
adminrouter.delete("/deletefaculty/:facultyid",admincontroller.deletefaculty)

adminrouter.post("/addcourse",admincontroller.addcourse)
adminrouter.get("/viewcourses",admincontroller.viewcourses)
adminrouter.delete("/deletecourse/:coursecode",admincontroller.deletecourse)

adminrouter.post("/allocatecourse",admincontroller.allocateFacultyToCourse)
adminrouter.get("/viewcoursefacultyallocation",admincontroller.viewcoursefacultyallocation)



module.exports = adminrouter