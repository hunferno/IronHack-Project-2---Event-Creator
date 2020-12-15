const express = require("express");
const router = new express.Router();
const EventModel = require("./../models/event");
const UserModel = require("./../models/user");


router.get("/profile", (req, res) => {
    // console.log(req.session.currentUser._id);
    res.render("profile");
  });
  

module.exports = router;
