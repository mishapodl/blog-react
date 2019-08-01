const express = require("express");
const router = express.Router();

const Post = require("../../models/Post");

router.get("/", (req, res) => {
  const { start = 0, limit = 3 } = req.query;
  const end = +limit + +start;

  Post.find()
    .skip(start)
    .limit(end)
    .sort({ date: -1 }) 
    .then(posts => {
      res.json(posts);
    })
    .catch(err => console.log(err));
});

module.exports = router;
