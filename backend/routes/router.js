const   express     = require('express'),
        router      = express.Router();

//Test route
router.get('/', (req,res) => {
    res.render('index');
});

//File upload route
router.post('/upload', (req,res) => {
    upload(req,res, err => {
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

module.exports = router;