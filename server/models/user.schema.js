const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: String,
  email: String,
  password: String,
  role: {
    type: String,
    default: "renter",
  },
  likedHouse: {
    type: [String],
    default: [],
  },
});
const User = mongoose.model("User", userSchema);

module.exports = User;
