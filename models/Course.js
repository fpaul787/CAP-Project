const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema
const courseSchema = new Schema({
    campus: {
        type: String,
        required: true
    },
    class_number: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    course_id:{
        type: String,
        required: true
    },
    course_title:{
        type: String,
        required: true
    },
    credits:{
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    meetings: {
        type: String        
    },
    mode: {
        type: String,
        required: true        
    },
    section: {
        type: String,
        required: true        
    },
    status: {
        type: String,
        required: true        
    },
    term:{
        type: String,
        required: true
    }
});

module.exports = Course = mongoose.model('course', courseSchema);