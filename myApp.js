var express = require('express');
var app = express();

// Challenge #1
console.log("Hello World")

app.get("/", (req, res) => {
	console.log("Yo");
	res.sendFile(__dirname + '/views/index.html');
})

































 module.exports = app;
