const express = require("express");
const router = new express.Router();
const EventModel = require("./../models/event");
const UserModel = require("./../models/user");

router.get("/dashboard", (req, res) => {
    res.render("dashboard");
  });

module.exports = router; 