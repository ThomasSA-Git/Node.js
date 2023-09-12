const express = require("express");
const app = express();

const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server is running on port ", PORT);
});

// Local time String
console.log(Date());
// UTC
console.log(new Date());
// Epoch timestamp / Unix. The number output is seconds.
console.log(Date.now());

// task: Create a route that returns date

// task: create a route that returns the current month

// task: create a route that returns the current day

app.get("/date", (req, res) => {

    res.send({ message: new Date() })
})

app.get('/month', (req, res) => {
    const currentMonthName = new Date().toLocaleDateString('en-US', { month: 'long' });
    res.send({ data: currentMonthName });
  });

  app.get('/day', (req, res) => {
    const currentDayName = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    res.send({ data: currentDayName });
  });