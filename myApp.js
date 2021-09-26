var express = require('express');
var app = express();

// Challenge #4
// app.use(express.static(__dirname,"/public"));

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
	console.log(__dirname);
	res.sendFile(__dirname + '/views/index.html');
})

// Challenge #5
app.get("/json", (req, res) => {
	const result = new Object();
	result["message"] = "Hello json";
	res.json(result);
});































 module.exports = app;
