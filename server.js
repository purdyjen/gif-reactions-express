var express = require("express");
var path = require("path");
var app = express();
// var dotenv = require("dotenv").config();

app.use(express.static(path.join(__dirname, "app/public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "app/public/index.html"));
});

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
