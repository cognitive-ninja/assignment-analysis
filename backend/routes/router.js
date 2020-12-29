const express   = require('express'),
    router      = express.Router(),
    multer      = require('../middleware/multer-config'),
    fs          = require('fs'),
    { TesseractWorker } = require('tesseract.js'),
    worker      = new TesseractWorker(),
    get_similarity = require('../controllers/string-similarity');


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
                res.send(result.text);
            })
            .finally(() => worker.terminate());
        });
    });
});

router.get('/getsim',(req, res)=>{
    const degree = get_similarity();
    res.send("The similarity degree :" + degree);
});

module.exports = router;