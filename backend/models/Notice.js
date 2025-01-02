const mongoose = require("mongoose");

const NoticeSchema = new mongoose.Schema({
  filename: String,
  filepath: String,
  date: { type: Date, default: Date.now },
  archived: { type: Boolean, default: false },
});

module.exports = mongoose.model("Notice", NoticeSchema);
