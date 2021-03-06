const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  postId: {
    type: String,
    required: true
  },
  authId: {
    type: String,
    default: ""
  },
  body: {
    type: String,
    required: true
  },
  authName: {
    type: String,
    default: ""
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Comment = mongoose.model("comments", CommentSchema);
