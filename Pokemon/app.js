import express from "express";
const app = express();

import path from "path";

import { randomIntFromInterval, randomPokemonId } from "./util/randomUtil.js";

app.use(express.json());
app.use(express.static("public"));

// =====================html====================

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./public/frontpage/frontpage.html"));
});

app.get("/battle", (req, res) => {
  res.sendFile(path.resolve("./public/battle/battle.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve("./public/contact/contact.html"));
});

// =====================html====================

app.get("/proxyserver", (req, res) => {
  // task: fetch "http://google.com"

  fetch("http://google.com")
    .then((response) => {
      if (!response.ok) {
        throw new Error("error");
      }
      return response.text();
    })
    .then((html) => {
      // task: then serve
      res.send(html);
    })
    .catch((error) => {
      res.status(500).send("Error: " + error.message);
    });
});

// =====================routes====================

const pikachu = {
  url: "blabla",
  name: "Pikachu",
  strength: 7,
};

let currentPokemon = { ...pikachu };

app.get("/battlepokemon", (req, res) => {

  if (!currentPokemon || currentPokemon.strength <= 0) {
    let pokemonId = randomIntFromInterval(1, 151);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error getting a pokemon");
        }
        return response.json();
      })
      .then((result) => {
        const name = result.name.charAt(0).toUpperCase() + result.name.slice(1);
        const imageURL = result.sprites.other.home.front_default;
        const strength = randomIntFromInterval(1, 10);

        currentPokemon = {
            name, 
            imageURL,
            strength
        };
        res.send({ data: currentPokemon });
      });
  } else {
    currentPokemon.strength--;
    res.send({ data: currentPokemon });
  }
});

//every time battle is entered, pokemon looses one strength. Gets pokemon by entering start page.

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port:", PORT));
