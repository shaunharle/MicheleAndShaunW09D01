const express = require("express");
const mongoose = require("mongoose");
const PORT = 3003;
const app = express();

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(PORT);
