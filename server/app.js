require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 4000;
require("./config/db");
const Course = require("./models/course");
const User = require("./models/user");

app.get("/", (_, res) => {
  res.send("Hello from Server");
});

app.get("/courses", async (_, res) => {
  const courses = await Course.find({}).exec();
  res.send(courses);
});

app.get("/user", async (req, res) => {
  const { uid } = req.query;
  const user = {};
  await User.findOne({ uid }).then((res) => {
    user.name = res.name;
    user.bio = res.bio;
    user.imageUrl = res.imageUrl;
    user.courses = Course.find({ _id: { $in: res.coursesId } });
  });
  res.send(user);
});

app.patch("/user", async (req, res) => {
  const { uid, name, bio, coursesEnrolled } = req.body;
  const user = await User.findOneAndUpdate(
    { uid },
    { name, bio, coursesEnrolled },
    { runValidators: true, omitUndefined: true, new: true }
  ).exec();
  res.send(user);
});

app.post("/user", async (req, res) => {
  const { uid } = req.body;
  const user = new User({ uid });
  const data = user.save();
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Server started at: http://localhost:${PORT}`);
});
