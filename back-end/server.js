// DEPENDENCIES
const express = require("express");
const app = express();

// DEPENDENCY CONFIGURATIONS
const PORT = 3003;
const mongoose = require("mongoose");
const cors = require("cors");

//MIDDLEWARE

const whitelist = [
  "http://localhost:3000",
  "https://fathomless-sierra-68956.herokuapp.com"
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

const bookmarksController = require("./controllers/bookmarks.js");

app.use(cors(corsOptions));
app.use(express.json());
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

app.listen(PORT, () => {
  console.log("BACK END CHECKING IN HERE, ALL SYSTEMS GO");
});
