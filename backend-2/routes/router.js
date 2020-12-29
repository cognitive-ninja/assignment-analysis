const express   = require('express'),
    router      = express.Router(),
    controllers = require('../controllers/text-recognition'),
    get_similarity = require('../controllers/string-similarity');

//Test route
router.get('/', (req,res) => {
    res.render('index');
});

//File upload route
router.post('/upload', (req,res) => {
    console.log("upload route was hit");

    

});

router.get('/getsim',(req, res)=>{
    const degree = get_similarity();
    res.send("The similarity degree :" + degree);
});

module.exports = router;