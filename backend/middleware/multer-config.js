const fs    = require('fs'),
    multer  = require('multer');

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

module.exports = {storage, upload};