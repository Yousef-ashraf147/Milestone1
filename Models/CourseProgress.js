const mongoose = require("mongoose");
const CourseProgressSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  username: {
    type: String,
  },
  subtitles: {
    type: [{ subtitle: String, isDone: Boolean }],
  },
});

const CourseProgress = mongoose.model("Courses", CourseProgressSchema);
module.exports = CourseProgress;