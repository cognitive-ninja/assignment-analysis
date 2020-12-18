//IMPORTS
const express   = require('express'),
    app         = express(),
    mongoose    = require('mongoose'),
    routes      = require('./routes/router'),
    variables   = require('./env-variables');

//Configurations:
//Rendering
app.set("view engine","ejs");
//Routing
app.use(routes);
//Database
mongoose.connect("mongodb+srv://TeamBakchodi:" +variables.mongoDBPassword +"@assignment-analyzer.nlazz.mongodb.net/<dbname>?retryWrites=true&w=majority", {useUnifiedTopology:true, useNewUrlParser:true});



const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`HEY! I'm running on port ${PORT}`));

