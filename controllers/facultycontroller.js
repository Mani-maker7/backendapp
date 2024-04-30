const Faculty = require("../models/Faculty")
const Assignment= require("../models/Assignment")
const multer=require('multer')
const path=require('path')
const fs=require('fs')

  const checkfacultylogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       const faculty = await Faculty.findOne(input)
       response.json(faculty)
     }
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };
   const changefacultypwd = async (request, response) => {
    try {
      const { username, oldpassword, newpassword } = request.body;
  
      const faculty = await Faculty.findOne({ username, password: oldpassword });
      
      if (!faculty) {
        response.status(400).send('Invalid Old Password');
      } else {
        if (oldpassword === newpassword) {
          response.status(400).send('Both Passwords are Same');
        } else {
          await Faculty.updateOne({ username }, { $set: { password: newpassword } });
          response.json('Password Updated Successfully');
        }
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };
  
     
   const facultyprofile = async (request, response) => {
    try {
      const email = request.params.email;
      const faculty = await Faculty.findOne({ email });
      if (faculty) {
        response.json(faculty);
      } else {
        return response.status(404).send('Faculty not found with the provided email id');
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  const updatefacultyprofile = async (request, response) => {
    try {
      const input = request.body;
      const email = input.email; 
      const faculty = await Faculty.findOne({ email });
      if (!faculty) {
        return response.status(404).send('Faculty not found with the provided email id');
      }
      for (const key in input) {
        if (key !== 'email' && input[key]) {
          faculty[key] = input[key];
        }
      }
      await faculty.save();
      response.status(200).send('Faculty Profile Updated Successfully');
    } catch (error) {
      response.status(500).send(error.message);
    }
  };
  
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './media/'); // Destination folder
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // File naming convention
    }
  });
  const upload = multer({ storage: storage }).single('file');


   const addassignment = async (req, res) => {
    try {
      upload(req, res, async function (err) {
        if (err) {
          console.error(err);
          return res.status(500).send(err.message);
        }
  
        const { courseCode,courseTitle, date, dueDate } = req.body;
        const fileName = req.file ? req.file.filename : undefined;
  
        const newAssignment = new Assignment({ 
          

          courseCode,
          courseTitle,
          date,
          dueDate,
          file: fileName
        });
  
        await newAssignment.save();
        res.status(200).send('Assignment Created Successfully'); 
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
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
  
  

   const assignmentimage = async (req, res) => {
    const filename = req.params.filename;
    const filepath = path.join(__dirname, '../media', filename);
    console.log(filepath);
  
    fs.readFile(filepath, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error reading image file');
      }
  
      const ext = path.extname(filename).toLowerCase();
      let contentType = 'application/octet-stream';
  
      if (ext === '.png') {
        contentType = 'image/png';
      } else if (ext === '.jpg' || ext === '.jpeg') {
        contentType = 'image/jpeg';
      } else if (ext === '.pdf') {
        contentType = 'application/pdf';
      } else if (ext === '.txt') {
        contentType = 'text/plain';
      }
      else if(ext==='.doc'||ext==='.docx'){
        contentType = 'application/doc';

      }
  
      res.setHeader('Content-Type', contentType);
      res.send(data);
    });
  };



  module.exports = {checkfacultylogin,assignmentimage,addassignment,facultyprofile,updatefacultyprofile,viewassignments,changefacultypwd}