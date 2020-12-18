//IMPORTS
const express   = require('express'),
    app         = express(),
    fs          = require('fs'),
    multer      = require('multer'),
    { TesseractWorker } = require('tesseract.js'),
    worker      = new TesseractWorker();

//STORAGE
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,"./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage}).single("avatar");

app.set("view engine","ejs");

//ROUTES
app.get('/', (req,res) => {
    res.render('index');
});

app.post('/upload', (req,res) => {
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

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`HEY! I'm running on port ${PORT}`));

