const express = require("express");
const router = express.Router();

const Comment = require("../../models/Comment");

router.get("/:id", (req, res) => {
  Comment.find({ postId: req.params.id }).then(comments => {
    res.json(comments);
  });
});

router.post('/', (req, res) => {
  const newComment = new Comment({
    postId: req.body.postId,
    desc: req.body.desc
  });

  newComment.save().then(comment => res.json(comment));
});

module.exports = router;
