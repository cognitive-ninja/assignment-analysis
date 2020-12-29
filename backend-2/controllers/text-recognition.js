const multer    = require('../middleware/multer-config'),
    fs          = require('fs'),
    { TesseractWorker } = require('tesseract.js'),
    worker      = new TesseractWorker(),

    
    // vision      = require('@google-cloud/vision'); // Google cloud vision library.
    //client      = new vision.ImageAnnotatorClient(); // Creates a client

const tesseract = multer.upload(req,res, err => {
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


module.exports = {tesseract};

// async function quickstart(req, res, err) {
//     if(err)
//         return console.log("You piece of shit");
//     // // Imports the Google Cloud client library
//     // const vision = require('@google-cloud/vision');
  
//     // Creates a client
//     const client = new vision.ImageAnnotatorClient();
  
//     // Performs label detection on the image file
//     const [result] = await client.labelDetection(`./uploads/photo_2020-12-19_12-10-35.jpg`);
//     const labels = result.labelAnnotations;
//     console.log('Labels:');
//     labels.forEach(label => console.log(label.description));
//     labels.forEach(label => res.send(label.description));
//     // return labels;
// }


  