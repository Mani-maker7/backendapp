const mongoose = require("mongoose");

const courseFacultyAllocationSchema = new mongoose.Schema({
    course: {
        type: Object,
        required: true
    },
    faculty: {
        type: Object,
        required: true
    },
});

module.exports = mongoose.model('FacultyCourseMap', courseFacultyAllocationSchema);