// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// DEPENDENCY CONFIGURATIONS
const PORT = 3003;
const app = express();
const bookmarksController = require("./controllers/bookmarks.js");

//MIDDLEWARE
const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};
// CONTROLLERS/ROUTES
app.use(express.json());
app.use(cors(corsOptions));

app.use("/bookmarks", bookmarksController);
// DATABASE ERROR / DISCONNECTION
mongoose.connection.on("error", error =>
  console.log(error.message + " mongo might not be running there, chief")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

//DATABASE CONNECTION
mongoose.connect("mongodb://localhost:27017/bookmarks", {
  useNewUrlParser: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose.....");
});

// app.get("/", (req, res) => {
// 	res.send("Hello World!");
// });
// LISTEN
app.listen(PORT, () => {
  console.log("BACK END CHECKING IN HERE, ALL SYSTEMS GO");
});
