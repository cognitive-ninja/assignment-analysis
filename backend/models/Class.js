const mongoose = require('mongoose');
const ClassSubmission = require('./ClassSubmission');
const User = require('./User');

const ClassSchema = mongoose.Schema({
    classname   : String,
    owner       : {
        type : [String]
    },
    student     : {
        type : [String]
    },
    subject : {
        subjectname   : String,
        teacher     : {
            type : [String]
        },
        student     : {
            type : [String]
        },
        classSubmission : [{
            assignment_no : Number,
            submission    : mongoose.Types.ObjectId
        }]
    }
});

module.exports = mongoose.model("Class", ClassSchema);