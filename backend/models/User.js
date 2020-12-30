const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type    : String,
    },
    info:{
        first_name  : String,
        last_name   : String,
        email       : String
    }
});

module.exports = mongoose.model("User", UserSchema);