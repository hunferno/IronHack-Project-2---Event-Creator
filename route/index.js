const express = require("express");
const router = new express.Router();
const EventModel = require("./../models/event");

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
