
//declares dependencies for application

const express = require('express');
const path = require('path');
const application = express();
const PORT = process.env.PORT || 3000;

//express application
//returns middleware that only parses urlencoded bodies
application.use(express.urlencoded({ extended: true 
}));

//sets up a static public directory
application.use(express.json());
application.use(express.static('public'));

//routers

require("./routes/apiRoutes")(application);
require("./routes/htmlRoutes")(application);

//starts server to begin listening
application.listen(PORT, function () {
    console.log('The port that the application is listening on is' + PORT );
});