const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type    : String,
    },
    info:{
        first_name  : String,
        last_name   : String,
        email       : String
    },
    password: String,
    createdClass    :[mongoose.Schema.Types.ObjectId],
    joinedClass     :[mongoose.Schema.Types.ObjectId]
});

module.exports = mongoose.model("User", UserSchema);