import express from "express";
const app = express();

app.use(express.json());
app.use(express.static("public"));

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port:", PORT));

import fs from "fs";

app.get("/", (req, res) => {
    res.send(fs.readFileSync("./public/pages/home/home.html").toString());
});

app.post("/contact", (req, res) => {
    //sendEmail(req.body.email);
    res.send({ message: "Your message has been submitted."} );
  });
  