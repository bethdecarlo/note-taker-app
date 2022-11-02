
//declares dependencies for app

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

//returns middleware that only parses urlencoded bodies
app.use(express.urlencoded({ extended: true 
}));

//sets up a static public directory
app.use(express.json());
app.use(express.static('public'));

//routers

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//starts server to begin listening
app.listen(PORT, function () {
    console.log('👂 Now listening on port' + PORT );
});