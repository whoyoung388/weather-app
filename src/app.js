const express = require("express");
const path = require("path");
const hbs = require("hbs");

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and view location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    author: "Yang Hu"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About this page...",
    author: "Yang Hu"
  });
});

app.get("/api/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address!"
    });
  }

  const address = req.query.address;
  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({
        error
      });
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({
          error
        });
      }
      const forecastString = `Temperature: ${forecastData.temperature},
                            Probability to rain: ${forecastData.precipitation}`;
      return res.send({
        forecast: forecastString,
        location: location,
        address: req.query.address
      });
    });
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    description: "Find some helpful info here.",
    author: "Yang Hu"
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    author: "Yang Hu",
    errorMessage: "Helper article not found."
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    author: "Yang Hu",
    errorMessage: "Page not found."
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
