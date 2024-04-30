const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  courseCode: {
    type: String,
    required: true
  },
  courseTitle: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  file: {
    type: String, // Assuming the file is stored as a URL or file path
    required: true
  }
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
