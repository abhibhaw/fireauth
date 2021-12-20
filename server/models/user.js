const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    uid: {
      type: String,
      required: [true, "UID can help us identify you"],
      unique: true,
    },
    name: {
      type: String,
      default: "Anonymous",
    },
    bio: {
      type: String,
      default: "Learning with community",
    },
    imageUrl: {
      type: String,
      default: "https://avatars.githubusercontent.com/u/39991296?v=4",
    },
    coursesId: Array,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
