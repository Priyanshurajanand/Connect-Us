const express = require("express");
const route = express.Router();
const { authorize } = require("../../functions/authFunc");
const event = require("../../schema/event");
const schedule = require("../../schema/schedule");



route.get('/', authorize ,  (req, res) => {
  res.render('dashboard',{ tabName: "Connect Us | Dashboard" , user: req.user });
});


route.post("/", (req, res) => {
  
  
        event({
          username: req.body.username,
          ftitle: req.body.ftitle,
          fdescription: req.body.fdescription,
          fdate: req.body.fdate,
          fstart: req.body.fstart,
          fend: req.body.fend,
        }).save((err, data) => {
          req.flash("success", "Event Created");
          res.redirect("/dashboard");
        });
      });

      
route.post("/", (req, res) => {
  
  
        schedule({
          meetingLink: req.body.meetingLink,
          ttitle: req.body.ttitle,
          tdescription: req.body.tdescription,
          tdate: req.body.tdate,
          tstart: req.body.tstart,
          tend: req.body.tend,
        }).save((err, data) => {
          req.flash("success", "Meeting Schedule");
          
        });
      });
module.exports = route;