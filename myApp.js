var express = require("express");
var app = express();

console.log("Hello World");

app.use(function (req, res, next) {
  console.log(req.method + " " + req.path, +" " + req.ip);
  next();
});

module.exports = app;
