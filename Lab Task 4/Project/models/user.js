const mongoose = require("mongoose");
const Schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  usertype: {
    type: String,
    default:"user",
  },
  playerProfile: {
    level: {
      type: Number,
      default: 1,
    },
    power: {
      type: Number,
      default: 100,
    },
    achievements: {
      type: [String],
      default: ["Beginner"],
    },
  },
});

const user = mongoose.model("userProfile", Schema);
module.exports = user;