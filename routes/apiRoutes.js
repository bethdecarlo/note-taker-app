//API ROUTES

//dependencies
const fs = require('fs');

module.exports = function (app) {

    //Application must have a db.json that will store data on the backend.
    //This function will read the content (string) in db.json and will parse the string into JSON.

  
    app.get("/api/notes", function (req, res) {
        console.log("Returning all saved notes from the db.json file");
        fs.readFile("db/db.json", "utf8", (err, string) => {
            if (err) throw err ('Error: Execution halted.');
            let notes = JSON.parse(string);
            res.json(notes);}); 
        });
