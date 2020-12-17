const express = require("express");
const router = new express.Router();
const EventModel = require("./../models/event");
const UserModel = require("./../models/user");
const uploader = require("../config/cloudinary");
const protectPrivateRoute = require("./../middlewares/protectPrivateRoute");

router.use(protectPrivateRoute);

// *************Render DASHBOARD My event page***********
router.get("/dashboard", async (req, res, next) => {
  try {
    const id_user = res.locals.currentUser._id;
    // const allCreatedEvent = await EventModel.find().populate("id_user");
    const allCreatedEvent = await EventModel.find({
      id_user: id_user,
    });
    const participateEvents = await EventModel.find({
      participant_ids: id_user,
    });
    res.render("dashboard", {
      myEvents: allCreatedEvent,
      hisEvents: participateEvents,
    });
  } catch (error) {
    next(error);
  }
});
// *************End***********

// *************Render DASHBOARD His event page***********
router.get("/dashboard/:id", async (req, res, next) => {
  try {
    const allParticipatedEvent = await EventModel.findById(req.params.id);
    res.render("dashboard", allParticipatedEvent);
  } catch (error) {
    next(error);
  }
});
// *************End***********

// *************Render Create Event page***********
router.get("/events_manage/create", (req, res) => {
  res.render("create_event");
});
// *************End***********

// *************Create Event***********
router.post(
  "/events_manage/create",
  uploader.single("image"),
  async (req, res, next) => {
    try {
      if (req.file) {
        req.body.image = req.file.path;
      }
      req.body.id_user = res.locals.currentUser._id;
      await EventModel.create(req.body);
      res.redirect("/dashboard");
    } catch (error) {
      next(error);
    }
  }
);
// *************End***********

// *************Delete Event***********
router.get("/events_manage/delete/:id", async (req, res, next) => {
  try {
    await EventModel.findByIdAndRemove(req.params.id);
    res.redirect("/dashboard");
  } catch (error) {
    next(error);
  }
});
// *************End***********

// *************Render Update Event page***********
router.get("/events_manage/update/:id", async (req, res, next) => {
  try {
    const updateEvent = await EventModel.findById(req.params.id);
    updateEvent.public = updateEvent.eventType === "public";
    res.render("update_event", updateEvent);
  } catch (error) {
    next(error);
  }
});
// *************End***********

// *************Update Event***********
router.post(
  "/events_manage/update/:id",
  uploader.single("image"),
  async (req, res, next) => {
    try {
      if (req.file) {
        req.body.image = req.file.path;
      }
      await EventModel.findByIdAndUpdate(req.params.id, req.body);
      res.redirect("/dashboard");
    } catch (error) {
      next(error);
    }
  }
);
// *************End***********

module.exports = router;
