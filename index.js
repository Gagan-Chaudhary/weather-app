const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 3000;

// for using static files
const staticPath = path.join(__dirname, "/assets");
const template_path = path.join(__dirname, "/templates/views");
const partials_path = path.join(__dirname, "/templates/partials");
app.use(express.static(staticPath));
// console.log(staticPath);

app.set("view engine", "hbs");
app.set("views", template_path);
// app.use(express.static("images"));
hbs.registerPartials(partials_path);

app.set();

// Routing
// Routing

app.get("", (req, res) => {
  // console.log("Home page");
  // res.send("Home page");
  res.render("index");
  // console.log(req.query);
});

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  // res.send("Checkout weather ");
  res.render("weather");
});
app.get("*", (req, res) => {
  res.render("404error");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
