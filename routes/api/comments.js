const express = require("express");
const router = express.Router();

const Comment = require("../../models/Comment");

router.get("/:id", (req, res) => {
  Comment.find({ postId: req.params.id }).then(comments => {
    res.json(comments);
  });
});

module.exports = router;
