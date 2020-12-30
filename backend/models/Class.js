const mongoose = require('mongoose');
const ClassSubmission = require('./ClassSubmission');
const User = require('./User');

const ClassSchema = mongoose.Schema({
    classname   : String,
    teacher     : [String],
    student     : [String],
    classSubmission : [{
        assignment_no : Number,
        submission    : String
    }]
});

module.exports = mongoose.model("Class", ClassSchema);