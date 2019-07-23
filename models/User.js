const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    default: "",
    unique: true
  },
  password: {
    type: String,
    default: ""
  },
  registr_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Comment = mongoose.model("comments", CommentSchema);
