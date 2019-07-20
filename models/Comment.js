const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  postId: {
    type: String,
    required: false
  },
  authId: {
    type: String,
    default: ""
  },
  desc: {
    type: String,
    required: false
  },
  name: {
    type: String,
    default: ""
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Comment = mongoose.model("comments", CommentSchema);
