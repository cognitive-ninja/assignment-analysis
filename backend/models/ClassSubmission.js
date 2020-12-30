const mongoose = require('mongoose');

const SumbmissionSchema = mongoose.Schema({
    // class_id : {
    //     Type    : mongoose.Schema.Types.ObjectId,
    //     ref     : "Class"
    // },
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