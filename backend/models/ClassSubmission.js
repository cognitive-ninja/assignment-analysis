const mongoose = require('mongoose');

const SumbmissionSchema = mongoose.Schema({
    class : {
        Type    : mongoose.Schema.Types.ObjectId,
        ref     : Class
    },
    assignment_id : {
        Type        : Number,
        required    : true,
        unique      : true
    },
    submission : [{
        student : {
            Type    : mongoose.Schema.Types.ObjectId,
            ref     : User
        },
        answer : [{
            q_id : Number,
            text : String
        }]
    }]
});

module.exports = mongoose.model("classSubmission", SumbmissionSchema);