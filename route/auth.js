const express = require("express");
const router = new express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt"); // lib to encrypt data

// *************SIGNUP RENDER PAGE***********
router.get("/signup", (req, res) => {
  res.render("signup");
});
// *************END***********

// *************SIGNUP TRAITMENT***********
router.post("/signup", async (req, res, next) => {
  try {
    const newUser = { ...req.body };
    const foundUser = await User.findOne({ email: newUser.email });

    if (foundUser) {
      req.flash("warning", "Email already registered");
      res.redirect("/signin");
    } else {
      const hashedPassword = bcrypt.hashSync(newUser.password, 10);
      newUser.password = hashedPassword;
      await User.create(newUser);
      req.flash("success", "Congratulation for your register");
      res.redirect("/signin");
    }
  } catch (error) {
    next(error);
  }
});
// *************END***********

// *************SIGNIN RENDER PAGE***********
router.get("/signin", (req, res) => {
  res.render("signin");
});
// *************END***********

// *************SIGNIN TRAITMENT***********
router.post("/signin", async (req, res, next) => {
  const { email, password } = req.body;
  const foundUser = await User.findOne({ email: email });

  if (!foundUser) {
    req.flash("error", "Email or Password invalid");
    res.redirect("/signin");
  } else {
    const isSamePassword = bcrypt.compareSync(password, foundUser.password);
    if (!isSamePassword) {
      req.flash("error", "Email or Password invalid");
      res.redirect("/signin");
    } else {
      // Authenticate the user...
      // const userDocument = { ...foundUser };
      const userObject = foundUser.toObject();
      delete userObject.password;
      req.session.currentUser = userObject;
      req.flash("success", "Welcome back");
      res.redirect("/");
    }
  }
});
// *************END***********

// *************SIGNOUT TRAITMENT***********
router.get("/signout", async (req, res, next) => {
  req.session.destroy(function (err) {
    // cannot access session here
    // console.log(req.session.currentUser);
    res.redirect("/");
  });
});
// *************END***********

module.exports = router;
