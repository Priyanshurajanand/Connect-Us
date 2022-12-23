const express = require("express");
const route = express.Router();
const contact = require("../schema/contact");


route.get('/', (req, res) => {
  res.render('start', { tabName: "Connect Us "});
});

route.post("/", (req, res) => {
  
  
  contact({
    fname: req.body.fname,
    email: req.body.email,
    message: req.body.message,
    
  }).save((err, data) => {
    req.flash("success", "");
    res.redirect("/start");
  });
});

module.exports = route;