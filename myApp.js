var express = require('express');
var app = express();
require("dotenv").config();

// Challenge #4
// app.use(express.static(__dirname,"/public"));

app.use("/public", express.static(__dirname + "/public"));

// Challenge #7
app.use("/", (req, res, next) => {
	const result = (req.method).toString() + " " + (req.path).toString() + " - " + (req.ip).toString();
	console.log(result);
	next();
});

app.get("/", (req, res) => {
	console.log(__dirname);
	res.sendFile(__dirname + '/views/index.html');
})

// Challenge #6
app.get("/json", (req, res) => {
	const result = new Object();
	if (process.env.MESSAGE_STYLE == "uppercase" || process.env.MESSAGE_STYLE === "uppercase") {
		result["message"] = "HELLO JSON";
	} else {
		result["message"] = "Hello json";
	}
	res.json(result);
});

// Challenge #8
app.get('/now', (req, res, next) => {
	const time = new Object();
	const a = new Date().toString();
	time["time"] = a;
	console.log(time);
	next();
}, (req, res) => {
	res.json(time);
})
























 module.exports = app;
