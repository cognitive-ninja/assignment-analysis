//IMPORTS
const express   = require('express'),
    app         = express(),
    mongoose    = require('mongoose'),
    routes      = require('./routes/router'),
    userRoutes  = require('./routes/userRoutes'),
    classRoutes = require('./routes/classRoutes'),
    variables   = require('./env-variables');

var cors = require('cors')

//Configurations:
//Rendering
app.set("view engine","ejs");
//Parsing
app.use(express.json());
//Routing
app.use(cors())
app.use(routes);
app.use(userRoutes);
app.use(classRoutes);
//Database
mongoose.connect("mongodb+srv://TeamBakchodi:" +variables.mongoDBPassword +"@assignment-analyzer.nlazz.mongodb.net/Assignment-Analyzer?retryWrites=true&w=majority", {useUnifiedTopology:true, useNewUrlParser:true});



const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`HEY! I'm running on port ${PORT}`));

