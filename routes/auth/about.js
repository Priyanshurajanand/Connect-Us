const express = require("express");
const route = express.Router();


route.get('/',  (req, res) => {
  res.render('about',{ tabName: "Connect Us | User Details" });
});
module.exports = route;