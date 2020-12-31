const express   = require('express'),
    router      = express.Router(),
    User        = require('../models/User');

// 1. Route for creating new user in datebase.
router.post('/user', (req, res)=>{
    User.create(req.body.user, (err, createdUser)=>{
        if(err)
            return res.status(500).send({
                message: err.message || "Couldn't create database for user"
            });
        return res.status(200).send({
            massage: "Successfully created user database"
        });
    });
});

// 2. Route for fetching user profile

// 3. Route for updating user profile

// 4. Route for deleting a user.
router.delete('/user', (req, res)=>{
    User.findOneAndDelete({username:req.username},(err=>{
        if(err)
            return res.status(500).send({
                message: err.message || "Couldn't remove user from database"
            });
        return res.status(200);
    }));
});

module.exports = router;