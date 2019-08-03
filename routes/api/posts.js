const express = require("express");
const router = express.Router();

const Post = require("../../models/Post");

router.get("/", (req, res) => {
  const { page } = req.query;
	const start = page == 1 ? 0 : +page * 4 - 4;
	
  Post.find()
    .sort({ date: -1 })
    .skip(start)
    .limit(4)
    .then(posts => {
      res.json(posts);
    })
    .catch(err => console.log(err));
});

module.exports = router;
