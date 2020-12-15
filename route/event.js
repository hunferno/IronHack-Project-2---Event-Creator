const express = require("express");
const router = new express.Router();
const EventModel = require("./../models/event");
const UserModel = require("./../models/user");

// *************SIGNUP RENDER PAGE***********
router.get("/eventPage", (req, res) => {
  // console.log(req.session.currentUser._id);
  res.render("create_event");
});

// *************Feeding Carousel in Home Page***********
router.get("/", async (req, res, next) => {
  try {
    const carouselImg = await EventModel.find()
      .sort({ createdAt: -1 })
      .limit(9);
    res.render("homepage", { carouselImg });
  } catch (error) {
    next(error);
  }
});
// *************End***********

// *************Display allEvent in allEvents Page***********
router.get("/allEvent", async (req, res, next) => {
  try {
    const allEvents = await EventModel.find();
    res.render("allEvent", { allEvents });
  } catch (error) {
    next(error);
  }
});
// *************End***********

// *************Create Event***********
router.post("/events_manage/create", async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    await EventModel.create(req.body);
    res.redirect("/allEvent");
  } catch (error) {
    next(error);
  }
});
// *************End***********

// *************Delete Event***********
router.get("/events_manage/delete/:id", async (req, res, next) => {
  try {
    await EventModel.findByIdAndRemove(req.params.id);
    res.redirect("/allEvent");
  } catch (error) {
    next(error);
  }
});
// *************End***********

// *************Render Update Event page***********
router.get("/events_manage/update/:id", async (req, res, next) => {
  try {
    const updateEvent = await EventModel.findById(req.params.id);
    res.render("", updateEvent);
  } catch (error) {
    next(error);
  }
});
// *************End***********

// *************Update Event***********
router.post("/events_manage/update/:id", async (req, res, next) => {
  try {
    await EventModel.findById(req.params.id, req.body);
    res.redirect("/allEvent");
  } catch (error) {
    next(error);
  }
});
// *************End***********

module.exports = router;

// const ev.find().populate("id_user")
