const express = require("express");
const route = express.Router();
const { authorize } = require("../../functions/authFunc");


route.get("/", authorize ,  (req, res) => {
  res.render('profile.ejs',{ tabName: "Connect Us | My Profile" , user: req.user });
});
module.exports = route;