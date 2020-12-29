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
            res.send(req.files);
        }
        catch(error) {
            console.log(error);
            res.send(400);
        }
});

//server
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`HEY! I'm running on port ${PORT}`));