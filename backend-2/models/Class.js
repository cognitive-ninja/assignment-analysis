const mongoose = require('mongoose');

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
    }]
});

module.exports = mongoose.model("Class", ClassSchema);