const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send(" you are running man");
});

const categories = require("./data/categories.json");
const courses = require("./data/courses.json");

app.get("/course-categories", (req, res) => {
  res.send(categories);
});

app.get("/course-awesome", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const singleCourse = courses.find((course) => course._id == id);
  res.send(singleCourse);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const category_news = courses.filter((n) => n.category_id == id);
  res.send(category_news);
});

app.listen(port, () => {
  console.log("server is running", port);
});
