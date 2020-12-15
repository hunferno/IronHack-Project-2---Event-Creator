const express = require("express");
const router = new express.Router();

router.get("/allEvents", (req, res, next) => {
  res.render("allEvents");
});

module.exports = router;
