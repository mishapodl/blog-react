const express = require("express");
const mongoose = require("mongoose");
const config = require("config")
const app = express();

//Body
app.use(express.json());

//DB
const db = config.get("mongoURI");

//Connect
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.error(err));

const port = process.env.PORT || 5000;

app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/comments", require("./routes/api/comments"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

app.listen(port, () => console.log(`Server started on port ${port}`));
