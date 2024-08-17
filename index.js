const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.get("/", (req, res) => {
    res.render("home.ejs");
})
app.get("/rolldice", (req, res) => {
    let diceVal=Math.floor(Math.random() * 4)+1;
    res.render("rolldice.ejs", {num :diceVal});
})
app.listen(port, () => {
    console.log("Server running on port " + port);
})