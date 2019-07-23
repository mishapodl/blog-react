const config = require("config");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) res.status(401).json({ msg: "No token, authorization denied" });

  try {
    const decode = jwt.verify(token, config.get("jwtSecret"));
    req.user = decode;
    next();
  } catch (err) {
    res.status(400).json({ msg: "Token is not valid" });
  }
}

module.exports = auth;
