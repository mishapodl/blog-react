const express = require("express");
const router = express.Router();

const Post = require("../../models/Post");

router.get("/", (req, res) => {
  Post.find().limit(4).then(posts => {
    res.json(posts);
  });
});

// router.get("/posts?limit=:limit", (req, res) => {
//   Post.find()
//     .limit(parseInt(req.params.limit))
//     .then(posts => {
//       res.json(posts);
//     })
//     .catch(err => console.log(err));
// });

module.exports = router;
