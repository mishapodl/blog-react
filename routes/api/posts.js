const express = require("express");
const router = express.Router();

const Post = require("../../models/Post");


router.get("/", (req, res) => {
  const { page } = req.query;
  const start = page == 1 ? 0 : +page * 6 - 7;

  Post.find()
    .sort({ date: -1 })
    .skip(start)
    .limit(6)
    .then(posts => {
      res.json(posts);
    })
    .catch(err => console.log(err));
});

router.get("/sort", (req, res) => {
  const { date1 = "2019-07-01", date2 = "2019-08-01" } = req.query;
  Post.find({
    date: { $gte: new Date(date1), $lt: new Date(date2) }
  })
    .sort({ likes: -1 })
    .limit(3)
    .then(posts => {
      res.json(posts);
    })
    .catch(err => console.log(err));
});


module.exports = router;
