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

module.exports = router;

// const ev.find().populate("id_user")
// const user

// var q = models.Post.find({published: true}).sort({'date': -1}).limit(20);
