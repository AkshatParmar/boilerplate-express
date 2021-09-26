var express = require('express');
var app = express();

// Challenge #4
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
})


// Challenge #5
app.get("/json", (req, res) => {
	const result = new Object();
	result["message"] = "Hello json";
	res.json(result);
});
























 module.exports = app;
