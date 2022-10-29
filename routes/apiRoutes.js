//API ROUTES

//dependencies
const fs = require('fs');

module.exports = function (application) {

    //GET
    //application must have a db.json that will store data on the backend.
    //This function will read the content (string) in db.json and will parse the string into JSON.

  
    application.get("/api/notes", function (req, res) {
        console.log("Returning all saved notes from the db.json file");
        fs.readFile("db/db.json", "utf8", (err, string) => {
            if (err) throw err ('Error: Execution halted.');
            let notes = JSON.parse(string);
            res.json(notes);}); 
        });

    // POST //
    // This function will add new notes to the db.json file and return the new note to the application
    

    application.post("/api/notes", function (req, res) {
        fs.readFile("db/db.json", "utf8", (err, string) => {
            if (err) throw err ('Error: Execution halted.');

            let notes = JSON.parse(string);
            let newNotes = req.body;
            let uniqueId = (notes.length).toString();
            newNotes.id = uniqueId;
            console.log(newNotes);
            notes.push(newNotes);

            fs.writeFileSync("db/db.json", JSON.stringify(notes), "utf8", (err, string) => {
                if (err) throw err ('Error: Execution halted.');
                console.log("Success! New note added.");
            });

            res.json(notes);
        });
    });

    // DELETE// 
    // to delete a note, each note will have a unique note id. 
    // notes will be deleted from db according to their id. 
    // new notes will be written to the db 

    application.delete("/api/notes/:id", function (req, res) {
        fs.readFile("db/db.json", "utf8", (err, string) => {
            if (err) throw err('Error: Execution halted.');
    //declaring notes id 
            let notes = JSON.parse(string);
            let notesId = req.params.id;
            let newNotesId = 0;

            notes = notes.filter(currNote => {
                return currNote.id != notesId; });

            for (currNote of notes) {
                currNote.id = newNotesId.toString();
                newNotesId++;
            }

            fs.writeFileSync("db/db.json", JSON.stringify(notes), "utf8", (err, string) => {
                if (err) throw err ('Error: Execution halted.');
                console.log("Success!");
            });

            res.json(notes);
        });
    });
}