const express = require("express");
const router = new express.Router();

const bcrypt = require("bcrypt"); // lib to encrypt data

// *************SIGNUP RENDER PAGE***********
router.get("/eventPage", (req, res) => {
  res.render("create_event");
});


module.exports = router;
