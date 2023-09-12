const express = require(`express`);
const app = express();

app.use(express.json());

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port ", PORT);
});


let mountains = [
    { id: 1, name: "Mount Fuji", height: 3776 },
    { id: 2, name: "Kilimanjaro", height: 5895 },
    { id: 3, name: "Himmelbjerget", height: 147 },
]

let currentId = 3;

app.get("/mountains", (req, res) => {
   
    res.send({ data: mountains });

});

app.get("/mountains/:id", (req, res) => {
    const mountainId = Number(req.params.id);

    if  (!mountainId) {
        res.status(404).send({ error: "The mountain id must be a number."})
    }

    // Find mountain by id
    const mountain = mountains.find(mountain => mountain.id === mountainId);
  
    if (!mountain) {
        res.status(404).send({ error: "No mountain with that id." });
    } else {
        res.send({ data: mountain });
    }

});

app.post("/mountains", (req, res) => {

    const newMountain = req.body;
     if (!newMountain || !newMountain.name || !newMountain.height) {
        res.send({ error: 'Missing mountain data.' });
        return;
    }

    // Prefixed increment used for currentId instead of postfixed increment (currentId++).
    newMountain.id = ++currentId;
    mountains.push(newMountain);
    
    res.send({ data: newMountain });

});

app.patch("/mountains/:id", (req, res) => {
    const mountainId = Number(req.params.id);
    const updatedMountain = req.body;

    if (!mountainId || !updatedMountain || (!updatedMountain.name && !updatedMountain.height)) {
        res.status(404).send({ error: 'Invalid update data.' });
        return;
    }

    const existingMountain = mountains.findIndex(mountain => mountain.id === mountainId);
    
    if (existingMountain === -1) {
        res.status(404).send({ error: "No mountain with that id." });
    } else {
        mountains[existingMountain] = { ...mountains[existingMountain], ...updatedMountain, id: mountainId };
        //mountains[existingMountain].height = updatedMountain.height;
        res.send({ message: mountains[existingMountain] })
    }

});

app.put("/mountains/:id", (req, res) => {
    const mountainId = Number(req.params.id);
    const updatedMountain = req.body;

    if (!mountainId || !updatedMountain || (!updatedMountain.name && !updatedMountain.height)) {
        res.send({ error: 'Invalid update data.' });
        return;
    }

    const existingMountain = mountains.findIndex(mountain => mountain.id === mountainId);
    
    if (existingMountain === -1) {
        res.status(404).send({ error: "No mountain with that id." });
    } else {
        updatedMountain.id = mountains[existingMountain].id;
        mountains[existingMountain] = updatedMountain;
        res.send({ message: mountains[existingMountain]})
    }

});

app.delete("/mountains/:id", (req, res) => {
    const mountainId = Number(req.params.id);

    if (!mountainId) {
        res.send({ error: 'Invalid mountain id.' });
        return;
    }

    const existingMountainIndex = mountains.findIndex((mountain) => mountain.id === mountainId);

    if (existingMountainIndex === -1) {
        res.status(404).send({ error: 'No mountain with that id.' });
    } else {
        deletedMountain = mountains.splice(existingMountainIndex, 1);
        res.send({ data: deletedMountain });
    }

});