const express = require("express");

const app = express();

const PORT = 8080;

app.listen(PORT, () => {
    console.log("App is running on port: ", PORT);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/home.html");
});


// list of cities with their corresponding time zone offsets. Might add more.
const cities = [
    { name: "New York", offset: -4 },
    { name: "London", offset: 0 },
    { name: "Tokyo", offset: 9 },
    { name: "Copenhagen", offset: 0 },
];

app.get("/gettimezone", (req, res) => {
    const cityName = req.query.city;


    const city = cities.find((c) => c.name === cityName);

    try {
        if (city) {
            
            const now = new Date();
            now.setHours(now.getHours() + city.offset);

            res.json({ city: city.name, time: now });
        } else {
            res.status(400).json({ error: "City not found or time zone information not available." });
        }
    } catch (error) {
        res.status(500).json({ error: "An error occurred." });
    }
});
