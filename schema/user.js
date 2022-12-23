const mongoose = require("mongoose");

const user = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  profession: {
    type: String,
    require: true,
  },
  skills: {
    type: Array,
    require: true, 
  },
  role: {
    type: String,
    require:true,
  },

  password: {
    type: String,
    require:true,
  },
});

module.exports = new mongoose.model("user", user);
