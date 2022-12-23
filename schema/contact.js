const mongoose = require("mongoose");

const contact = mongoose.Schema({

  fname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
 

});

module.exports = new mongoose.model("contact", contact);
