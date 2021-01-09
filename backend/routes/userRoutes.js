const express   = require('express'),
    router      = express.Router(),
    User        = require('../models/User');
const bcrypt = require('bcrypt');
const _=require('lodash');

// 1. Route for creating new user in datebase.
// router.post('/user', (req, res)=>{
//     User.create(req.body.user, (err, createdUser)=>{
//         if(err)
//             return res.status(500).send({
//                 message: err.message || "Couldn't create database for user"
//             });
//         return res.status(200).send({
//             massage: "Successfully created user database"
//         });
//     });
// });
router.post('/user' , async (req, res ) =>{
    
    // const { error } = validateUser(req.body);
    // if(error) return res.status(400).send(error.details[0].message); 


    let newUser = await User.findOne( { "info.email": req.body.email });
    if(newUser) return res.status(400).send("User already registered with this Email-ID");
    
    newUser = new User();
    newUser.username = req.body.first_name + Math.floor((Math.random() * 1000) + 1);;
    newUser.password = req.body.password;
    newUser.info = _.pick(req.body, ['first_name', 'last_name','email']);
    newUser.createdClass = [];
    newUser.joinedClas = [];
    const salt = await bcrypt.genSalt(5);
    newUser.password = await bcrypt.hash(newUser.password, salt); 
    
    newUser = await newUser.save();
    res.send(_.pick(newUser, ['_id', 'username']));
    
    // const token = newUser.genAuthToken();
    // res.header('x-auth-token', token).send(_.pick(newUser, ['_id', 'name', 'email']));
    
});

// 2. Route for fetching user profile

// 3. Route for updating user profile

// 4. Route for deleting a user.
router.delete('/user/:id', (req, res)=>{
    User.findOneAndDelete({username:req.username},(err=>{
        if(err)
            return res.status(500).send({
                message: err.message || "Couldn't remove user from database"
            });
        return res.status(200);
    }));
});

module.exports = router;