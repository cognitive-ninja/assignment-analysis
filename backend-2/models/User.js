const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type    : String,
        required: true,
        unique  : true
    },
    info:{
        first_name  : String,
        last_name   : String,
        email       : String
    }
});

module.exports = mongoose.model("User", UserSchema);