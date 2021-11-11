const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const UsersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  date: {
    type: Date,
    default: Date,
  },
});

module.exports = Users = mongoose.model("Users", UsersSchema);
