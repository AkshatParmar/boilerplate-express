var express = require('express');
var app = express();

// Challenge #1
console.log("Hello World")

app.get("/", (req, res) => {
	console.log("Yo");
	res.send("Hello Express");
})

































 module.exports = app;
