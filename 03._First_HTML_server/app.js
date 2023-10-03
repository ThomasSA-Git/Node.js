const express = require(`express`);
const app = express();
app.use(express.json());

// Her server jeg static.
app.use(express.static("public"));

const { getWelcomeMessage } = require("./util/welcomeMessageUtil.js");
const e = require("express");

const PORT = 8080;

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Server is running on port: ", PORT);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/secondPage", (req, res) => {
  res.sendFile(__dirname + "/public/secondPage.html");
});

// ###################################


console.log()

app.get("/welcomeMessage", (req, res) => {
  const clientName = req.query.user;

  const welcomeMessage = getWelcomeMessage(clientName);

  res.send({ data: welcomeMessage });
});

// ###################################

app.get("/doorman/:key", (req, res) => {
  if(req.params.key === "sesameopenup"){
    // return needed below because endpoint can return two responses for one request.
    // Server side redirection.
    return res.redirect("/welcomeMessage");
  }
  res.send({ data: "You have not provided the correct key."} );
});