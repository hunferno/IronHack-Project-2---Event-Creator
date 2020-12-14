const express = require("express");
const router = new express.Router();

const bcrypt = require("bcrypt"); // lib to encrypt data

// *************SIGNUP RENDER PAGE***********
router.get("/signup", (req, res) => {
  res.render("signup");
});
// *************END***********

// *************SIGNIN RENDER PAGE***********
router.get("/signin", (req, res) => {
  res.render("signin");
});
// *************END***********

module.exports = router;
