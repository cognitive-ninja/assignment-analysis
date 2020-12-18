//IMPORTS
const express   = require('express'),
    app         = express(),
    fs          = require('fs'),
    multer      = require('multer'),
    { TesseractWorker } = require('tesseract.js'),
    worker      = new TesseractWorker(),
    routes      = require('./routes/router');

//Configurations
app.set("view engine","ejs");
app.use(routes);

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


const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`HEY! I'm running on port ${PORT}`));

