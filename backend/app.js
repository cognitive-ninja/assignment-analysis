const express = require("express");
const app = express();
const fs = require('fs');
const multer = require("multer");
const { TesseractWorker } = require("tesseract.js");
const worker = new TesseractWorker();

//multer configuration
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,"./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage })

//view ejs directly
app.set("view engine","ejs");

//ROUTES
app.get('/', (req,res) => {
    res.render('index');
});

//File upload routes
//single file
app.post('/uploadsingle', upload.single('myfiles'), 
    (req, res) => {
        try {
        res.send(req.file);
        }catch(err) {
        res.send(400);
        }
});

//multiple files
app.post('/uploadmultiple', upload.array('myfiles', 12) , 
    (req, res) => {
        try {
            res.send(req.files)
        } catch(error) {
            console.log(error);
            res.send(400);
        }
});

//2 files simultaneous
app.post('/uploaddouble', upload.fields(
    [
        {
            name: "image1",
            maxCount: 1
        },
        {
            name: "image2",
            maxCount: 1
        }
    ]), (req,res) => {
        try{
            const image_1 = req.files.image1[0];
            const image_2 = req.files.image2[0];

            var s1="",s2="";
            //extracting text from image_1
            fs.readFile(`./uploads/${image_1.originalname}`, (err, data) => {
                if(err)
                    return console.log('This is your error', err);
                
                worker
                .recognize(data, "eng", {tessjs_create_pdf: "1"})
                .progress(progress => {
                    console.log(progress);
                })
                .then(result => {
                    res.send(result.text);
                    s1 = result.text;
                })
                .finally(() => worker.terminate());
            });

            //extracting text from image_2
            // fs.readFile(`./uploads/${image_2.originalname}`, (err, data) => {
            //     if(err)
            //         return console.log('This is your error', err);
                
            //     worker
            //     .recognize(data, "eng", {tessjs_create_pdf: "1"})
            //     .progress(progress => {
            //         console.log(progress);
            //     })
            //     .then(result => {
            //         // res.send(result.text);
            //         s2 = result.text;
            //     })
            //     .finally(() => worker.terminate());
            // });

            
            // res.send(final_string);
        }
        catch(error) {
            console.log(error);
            res.send(400);
        }
});

//server
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`HEY! I'm running on port ${PORT}`));