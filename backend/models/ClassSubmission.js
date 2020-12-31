const mongoose = require('mongoose');

const SumbmissionSchema = mongoose.Schema({
    classname : String,
    assignment_id :Number,
    submission : [{
        student : String,
        answer : [{
            q_id : Number,
            text : String
        }]
    }]  
});

module.exports = mongoose.model("ClassSubmission", SumbmissionSchema);