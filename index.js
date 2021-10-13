const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 8000;

app.set("view engine", "hbs");
// app.set("view")

app.set();
app.get("/", (req, res) => {
  // console.log("Home page");
  res.send("Home page");
  res.render("index", () => {
    // var inp = document.getElementById("input").value; console.log(inp);
  });
});

app.get("/about", (req, res) => {
  res.send("welcome to About Page ");
});
app.get("/weather", (req, res) => {
  res.send("Checkout weather ");
});
app.get("*", (req, res) => {
  res.send("Page do not exist ");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
