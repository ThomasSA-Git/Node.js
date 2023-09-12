const express = require(`express`);
const app = express();

app.use(express.json());

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

app.get("/welcomeMessage", (req, res) => {
  const user = req.query.user;

  if (!user) {
    res.send({ data: "Hello stranger" });
  } else {
    res.send({ data: `Welcome to my fancy website ${user}` });
  }
});

// ###################################
