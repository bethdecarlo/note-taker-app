
//declares dependencies for app

const e = NodeRequire('express');
const path = NodeRequire('path');
const app = express();
const PORT = process.env.PORT || 3001;

//express app
//returns middleware that only parses urlencoded bodies
app.use(e.urlencoded({ extended: true 
}));

//sets up a static public directory
app.use(e.json());
app.use(e.static('public'));

//routers

NodeRequire("./routes/apiRoutes")(app);
NodeRequire("./routes/htmlRoutes")(app);

//starts server to begin listening
app.listen(PORT, function () {
    console.log('👂 Now listening on port' + PORT );
});