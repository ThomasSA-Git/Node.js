// The const below searches for express dependencies in the node_modules and imports them
const express = require("express");

// Instantiate express
const app = express();

// const app = require("express"){};

const otherData = 123;

// Below is the response for the request when entering the page
app.get("/", (req, res) => {
    res.send( {data: "This is the first request", otherData: otherData});
});

// Task: Create a dog endpoint that returns "woof"

app.get("/dog", (req, res) => {
    res.send({ dog: "woof", dog2: "meow" });
});

app.get("/dog/:id", (req, res) => {
    console.log(req.params.id)
    res.send();
});

let balance = 10;
app.get("/wallet/:withdrawal", (req, res) => {
    
    if(balance < 0.1) {
        res.send({ message: "You can't withdraw. No more money left" });
    } else if(balance < req.params.withdrawal) {
        res.send({ message: `You can't withdraw that much. Your balance is ${balance}` });
    }
    else {
        res.send({ message: `You've withdrawn ${req.params.withdrawal}`});
    };
});


app.get("/cat", (req, res) => {
    console.log(req.query);
    res.send({ message: "yes" });
});

app.get("/pirate", (req, res) => {
    
    res.send({ message: "yes" });
});

app.post("/cat", (req, res) => {

    console.log(req.body);
    res.send(req.body);
});

// 80 http
// 443 https
// 8080 http developer port.
// 9090 https developer port.

// Starts app on portnumber defined. 8080 is a tomcat server portnumber. Run the app.js with node to start it as usual.
app.listen(8080);