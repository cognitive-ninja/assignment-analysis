const { route } = require('./router');

const express   = require('express'),
    router      = express.Router(),
    Class       = require('../models/Class'),
    ClassSubmission = require('../models/ClassSubmission');

// 1. Route for creating class database.
router.post('/class', (req, res)=> {
    Class.create(req.body.class,(err, createdClass)=>{
        if(err)
            return res.status(500).send({
                message: err.message || "Couldn't create database for user"
            });
        return res.status(200).send({message:createdClass});
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
    });
});

// 5. Add student to class

// 6. Remove student from class

// 7. Add assignment 
router.post("/assignment",(req, res)=>{
    ClassSubmission.create(req.body.assignment,(err, createdAssignment)=>{
        if(err)
            return res.status(500).send({
                message: err.message || "Couldn't create assignment in the database"
            });
            Class.findOne({classname:req.body.assignment.classname},(err,foundClass)=>{
                if(err)
                    return res.status(500).send({
                        message: err.message || "Couldn't find the class in the database"
                    }); 
                foundClass.classSubmission.push({assignment_no:req.body.assignment.assignment_no,submission:createdAssignment._id});
            });
        return res.status(200).json({
            message: "Created assignment",
            object: createdAssignment
        });
    });
});
module.exports = router;