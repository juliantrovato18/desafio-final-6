"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("soy el servidor, heroku", port);
});
app.get("/players", function (req, res) {
    res.json({
        message: {}
    });
});
app.post("/players", function (req, res) {
    res.status(201).json({
        message: "xD",
        nombre: "julio"
    });
});
