const mongoose = require("mongoose");

const { Schema } = mongoose;

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Course title is required"],
    },
    desc: String,
    imageUrl: {
      type: String,
      default: "https://picsum.photos/250/150",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
