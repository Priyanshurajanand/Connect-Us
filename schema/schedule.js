const mongoose = require("mongoose");

const schedule = mongoose.Schema({

  meetingLink: {
    type: String,
    require: true,
  },
  ttitle: {
    type: String,
    require: true,
  },
  tdescription: {
    type: String,
    require: true,
  },
  tdate: {
    type: Date,
    require:true,
  },
  tstart : {
    type: String,
        require: true,
  },
  tend : {
    type: String,
        require: true,
  },

});

module.exports = new mongoose.model("schedule", schedule);
