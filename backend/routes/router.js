const express   = require('express'),
    router      = express.Router(),
    multer      = require('../middleware/multer-config'),
    fs          = require('fs'),
    { TesseractWorker } = require('tesseract.js'),
    worker      = new TesseractWorker(),
    get_similarity = require('../controllers/string-similarity'),
    ClassSubmission = require('../models/ClassSubmission');


//Test route
router.get('/', (req,res) => {
    res.render('index');
});

//File upload route
router.post('/upload', (req,res) => {
    console.log("upload route was hit");
    multer.upload(req,res, err => {
        fs.readFile(`./uploads/${req.file.originalname}`, (err, data) => {
            if(err)
                return console.log('This is your error', err);
            
            worker
            .recognize(data, "eng", {tessjs_create_pdf: "1"})
            .progress(progress => {
                console.log(progress);
            })
            .then(result => {
                // res.send(result.text);
                const submission = {
                    student : req.student_id,
                    answer  : {
                        q_id : req.qid,
                        text : result.text
                    }
                };
                console.log(result);
                // Store the result to database.
                ClassSubmission.findOne({classname: req.classname},(err, foundRecord){
                    foundRecord.submission.push(submission);
                    });
                });
            })
            .finally(() => worker.terminate());
        });
    });
});

//Route for getting similairty of two files.
router.get('/getsim',(req, res)=>{
    const degree = get_similarity();
    res.send("The similarity degree :" + degree);
});

module.exports = router;