const mongoose = require('mongoose');
const ClassSubmission = require('./ClassSubmission');

const ClassSchema = mongoose.Schema({
    classname   : {
        type    : String,
        required: true,
        unique  : true
    },
    teacher     : [{
        type    : mongoose.Schema.Types.ObjectId,
        ref     : "User" 
    }],
    student     : [{
        type    : mongoose.Schema.Types.ObjectId,
        ref     : "User"
    }],
    classSubmission : [{
        assignment_no : {
            Type        : Number,
            required    : true,
            unique      : true
        },
        submission    : {
            Type : mongoose.Schema.Types.ObjectId,
            ref  : ClassSubmission
        }
    }]
});

module.exports = mongoose.model("Class", ClassSchema);