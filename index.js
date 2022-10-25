const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send(" you are running man");
});

const categories = require("./data/categories.json");

app.get("/course-categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log("server is running", port);
});
