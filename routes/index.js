const express = require("express");
const route = express.Router();
const { authorize } = require("../functions/authFunc");

route.get("/", authorize, (req, res) => {
  res.render("index.ejs", { tabName: "Connect Us | Home", user: req.user });
});

module.exports = route;
