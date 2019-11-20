const mongoose = require("mongoose");

const bookmarksSchema = mongoose.Schema({
  title: String,
  url: String
});
module.exports = mongoose.model("Bookmarks", bookmarksSchema);
