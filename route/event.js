const express = require("express");
const router = new express.Router();
const EventModel = require("./../models/event");
const UserModel = require("./../models/user");

// *************Display allEvent in allEvents Page***********
router.get("/allEvents", async (req, res, next) => {
  try {
    const allEvents = await EventModel.find();
    res.render("allEvents", { allEvents });
  } catch (error) {
    next(error);
  }
});
// *************End***********

// *************Display event detail in eventDetail Page***********
router.get("/eventDetail/:id", async (req, res, next) => {
  try {
    const eventDetail = await EventModel.findById(req.params.id);
    res.render("eventDetail", eventDetail);
  } catch (error) {
    next(error);
  }
});
// *************End***********

module.exports = router;

// const ev.find().populate("id_user")
