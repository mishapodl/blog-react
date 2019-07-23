const express = require("express");
const router = express.Router();

const User = require("../../models/User");

router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(404).json({ msg: "Please enter all fields " });
  }

  User.findOne({ email })
    .then(user => {
      if (user) return res.status(404).json({ msg: "User already exist!" });
  });

  const newUser = new User({
    name,
    email,
    password
  });
});


module.exports = router;
