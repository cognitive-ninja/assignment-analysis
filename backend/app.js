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
//single
app.post('/upload', upload.single('profile'), (req, res) => {
    try {
      res.send(req.file);
    }catch(err) {
      res.send(400);
    }
});

//multiple
app.post('/bulk', upload.array('myfiles', 12) , (req, res) =>{
    try {
        var final_string = "";
        req.files.forEach(item => {
            
        })
    } catch(error) {
          console.log(error);
           res.send(400);
    }
});