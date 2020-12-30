const express   = require('express'),
    router      = express.Router(),
    Class       = require('../models/Class'),
    ClassSubmission = require('../models/ClassSubmission');

// 1. Route for creating class database.
router.post('/class', (req, res)=> {
    Class.create(req.class,(err, createdClass)=>{
        if(err)
            return res.status(500).send({
                message: err.message || "Couldn't create database for user"
            });
        return res.status(200);
    });
});

// 2. Route for fetching details of class

// 3. Route for updating class details.

// 4. Route for deleting class.
router.delete('/class', (req, res)=>{
    ClassSubmission.findOneAndDelete({classname: req.classname},(err)=>{
        if(err)
                return res.status(500).send({
                    message: err.message || "Couldn't delete class submissions from database"
                });
        Class.findOneAndDelete({classname: req.classname},(err)=>{
            if(err)
                return res.status(500).send({
                    message: err.message || "Couldn't delete class from database"
                });
            return res.status(200);
        });
    })
});