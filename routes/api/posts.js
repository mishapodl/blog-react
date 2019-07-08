const express = require("express");
const router = express.Router();

const Post = require("../../models/Post");

router.get("/", (req, res) => {
  Post.find().then(posts => {
    res.json(posts);
  });
});

router.post("/", (req, res) => {
  const newArticle = new Post({
    name: req.body.name
  });
  newArticle.save().then(posts => res.json(posts));
});

module.exports = router;
