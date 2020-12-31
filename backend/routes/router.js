const express   = require('express'),
    router      = express.Router(),
    multer      = require('../middleware/multer-config'),
    fs          = require('fs'),
    { TesseractWorker } = require('tesseract.js'),
    worker      = new TesseractWorker(),
    get_similarity = require('../controllers/string-similarity'),
    ClassSubmission = require('../models/ClassSubmission');


//Test route. Landing page
router.get('/', (req,res) => {
    res.render('index');
});

//File upload route. Multer uploads file. fs retrieves file, tesseract extracts text. text is stored in mongodb.
router.post('/upload', (req,res) => {
    // console.log(req);
    console.log("upload route was hit");
    multer.upload(req,res, err => {
        console.log(req.file);
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
                    student : req.body.student_id,
                    answer  : {
                        q_id : req.qid,
                        text : result.text
                    }
                };
                // console.log(result);
                // Store the result to database.
                ClassSubmission.findOne({classname: req.body.classname},(err, foundRecord)=>{
                    if(err)
                        return res.status(500).send({
                            message: err.message || "Couldn't add submission to database"
                        });
                    foundRecord.submission.push(submission);
                    foundRecord.save();
                    res.send(submission);
                });
            })
            .finally(() => worker.terminate());
        });
    });
});

//Route for getting similairty of two files.// Not required for actual application.
router.get('/getsim',(req, res)=>{
    const degree = get_similarity();
    res.json(degree);
});

module.exports = router;