const express = require("express");
const router = express.Router();
const Comment = require("../../models/Comment");
const auth = require("../../middleware/auth");

router.get("/:id", (req, res) => {
  Comment.find({ postId: req.params.id }).then(comments => {
    res.json(comments);
  });
});

router.post("/", auth, (req, res) => {
  const { postId, authId, authName, body } = req.body.comment;
  const newComment = new Comment({
    postId,
    authId,
    body,
    authName
  });

  newComment.save().then(comment => res.json(comment));
});

router.delete("/:id", auth, (req, res) => {
  Comment.findById(req.params.id).then(comment =>
    comment
      .remove()
      .then(() => res.json({ success: true }))
      .catch(err => res.status(400).json({ success: false }))
  );
});

module.exports = router;
