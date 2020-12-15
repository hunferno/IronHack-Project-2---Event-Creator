const express = require("express");
const router = new express.Router();
const EventModel = require("./../models/event");

const bcrypt = require("bcrypt"); // lib to encrypt data

// *************SIGNUP RENDER PAGE***********
router.get("/eventPage", (req, res) => {
  res.render("create_event");
});

// *************Feeding Carousel***********
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

// var q = models.Post.find({published: true}).sort({'date': -1}).limit(20);
