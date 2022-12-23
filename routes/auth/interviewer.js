const express = require("express");
const route = express.Router();


route.get('/',  (req, res) => {
  res.render('interviewer',{ tabName: "Connect Us | Interviewer Details" });
});
module.exports = route;