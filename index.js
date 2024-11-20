// launching express server:
const express = require("express");
const bodyParser = require("body-parser");
const weatherRequest = require("./requests/weather.request");
const port = process.env.PORT || 3000;

const app = express();

// ejs rendering setup:
app.set("view engine", "ejs");
app.use(express.static("public")); //show path to static files for express
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { weather: null, error: null });
});

app.post("/", async (req, res) => {
  const { city } = req.body;

  const { weather, error } = await weatherRequest(city);
  res.render("index", { weather, error });
});

app.listen(port, () => console.log(`Server has started on port ${port}...`));
