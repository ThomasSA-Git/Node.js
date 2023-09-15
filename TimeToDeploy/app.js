const express = require("express");

const app = express();

const PORT = 8080;

app.listen(PORT, () => {
    console.log("App is running on port: ", PORT);
});


function fetchKanyeQuote() {
    return fetch("https://api.kanye.rest")
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(data.quote);
          return { quote: data.quote };
        }
      })
      .catch((error) => {
        console.log("An error occurred while fetching data.");
      });
  }

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/home.html");
});


// list of cities with their corresponding time zone offsets. Might add more.
const cities = [
    { name: "New York", offset: -4 },
    { name: "Beijing", offset: 8 },
    { name: "Tokyo", offset: 9 },
    { name: "Copenhagen", offset: 0 },
    { name: "Los Angeles", offset: -7 },
];

app.get("/gettimezone", (req, res) => {
    const cityName = req.query.city;


    const city = cities.find((c) => c.name === cityName);

    try {
        if (city) {
            
            res.send({ city: city.name, offSet: city.offset });
        } else {
            res.status(400).send({ error: "City not found or time zone information not available." });
        }
    } catch (error) {
        res.status(500).send({ error: "An error occurred: "});
    }
});

app.get("/kanye", async (req, res) => {
    try {
      const quoteData = await fetchKanyeQuote();
      res.send(quoteData);
    } catch (error) {
      res.status(500).send({ error: "An error occurred." });
    }
  });