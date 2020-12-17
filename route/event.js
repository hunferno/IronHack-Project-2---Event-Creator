const express = require("express");
const router = new express.Router();
const EventModel = require("./../models/event");
const UserModel = require("./../models/user");

// *************Display allEvent in allEvents Page***********
router.get("/allEvents", async (req, res, next) => {
  try {
    const allEvents = await EventModel.find();
    allEvents.forEach((event) => {
      event.seat_remaining =
        event.maxParticipant - event.participant_ids.length;
    });
    res.render("allEvents", { allEvents });
  } catch (error) {
    next(error);
  }
});
// *************End***********

// *************Display event detail in eventDetail Page***********
router.get("/eventDetail/:id", async (req, res, next) => {
  try {
    const id_user = res.locals.currentUser._id;
    const eventDetail = await EventModel.findById(req.params.id);
    eventDetail.participate = eventDetail.participant_ids.includes(id_user);
    eventDetail.full =
      eventDetail.participant_ids.length >= eventDetail.maxParticipant;
    res.render("eventDetail", eventDetail);
  } catch (error) {
    next(error);
  }
});
// *************End***********

router.get("/event/:id/participate", async (req, res, next) => {
  try {
    const id_user = res.locals.currentUser._id;

    const event = await EventModel.findById(req.params.id);
    event.participant_ids.push(id_user);
    await EventModel.findByIdAndUpdate(req.params.id, event);
    res.redirect("/dashboard");
  } catch (error) {
    next(error);
  }
});

router.get("/event/:id/quit", async (req, res, next) => {
  try {
    const id_user = res.locals.currentUser._id;

    const event = await EventModel.findById(req.params.id);
    event.participant_ids.pop(id_user);
    await EventModel.findByIdAndUpdate(req.params.id, event);
    res.redirect("/dashboard");
  } catch (error) {
    next(error);
  }
});

module.exports = router;

// const ev.find().populate("user", "name, age(ce que l'on veut) -_id(on ne garde pas l'id)")
