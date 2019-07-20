const express = require("express");
const router = express.Router();
const Comment = require("../../models/Comment");

router.get("/:id", (req, res) => {
  Comment.find({ postId: req.params.id }).then(comments => {
    res.json(comments);
  });
});

router.post("/", (req, res) => {
  const { postId, authId, authName, body } = req.body.comment;
  console.log(req.body.comment);
  const newComment = new Comment({
    postId,
    authId,
    body,
    authName
  });

  newComment.save().then(comment => res.json(comment));
});

module.exports = router;
