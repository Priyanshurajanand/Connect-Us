const mongoose = require("mongoose");

const event = mongoose.Schema({

  username: {
    type: String,
    require: true,
  },
  ftitle: {
    type: String,
    require: true,
  },
  fdescription: {
    type: String,
    require: true,
  },
  fdate: {
    type: Date,
    require:true,
  },
  fstart : {
    type: String,
        require: true,
  },
  fend : {
    type: String,
        require: true,
  },

});

module.exports = new mongoose.model("event", event);
