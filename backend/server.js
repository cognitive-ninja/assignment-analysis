//IMPORTS
const express   = require('express'),
    app         = express(),
    { TesseractWorker } = require('tesseract.js'),
    worker      = new TesseractWorker(),
    routes      = require('./routes/router');

//Configurations
app.set("view engine","ejs");
app.use(routes);


const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`HEY! I'm running on port ${PORT}`));

