const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const port = 3000;

const home = fs.readFileSync("./index.html");
const about = fs.readFileSync("./about.html");
const contact = fs.readFileSync("./contact.html");
const services = fs.readFileSync("./services.html");

app.use("/static", express.static("static"));

app.set("view engine", "pug");

app.set("views", path.join(__dirname,"views"));



app.get("/demo", (req, res) => {
    res.status(200).render('demo.pug', { title: 'Pug', message: 'Hello there! I am saizan khan and learning how to use pug' })
  });


app.get("/", (req, res) => {
  res.end(home);
});
app.get("/about", (req, res) => {
  res.end(about);
});
app.get("/contact", (req, res) => {
  res.end(contact);
});
app.get("/services", (req, res) => {
  res.end(services);
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
