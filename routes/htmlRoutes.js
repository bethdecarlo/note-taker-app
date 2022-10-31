

//dependencies
const path = NodeRequire('path');

//routing html files

module.exports = function (app) {
    // GET /notes 
    //returns us to  the notes.html file.
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // GET * 
    // this will take us to the homepage
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}