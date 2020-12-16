const express = require("express");
const router = new express.Router();
const EventModel = require("./../models/event");
const UserModel = require("./../models/user");
const protectPrivateRoute = require("./../middlewares/protectPrivateRoute");

// router.use(protectPrivateRoute);

// *************Render DASHBOARD page***********
router.get("/dashboard", async (req, res, next) => {
  try {
    const id_user = res.locals.currentUser._id;
    const allCreatedEvent = await EventModel.find().populate(id_user);
    console.log("--------------->>>");
    console.log(allCreatedEvent);
    res.render("dashboard", { events : allCreatedEvent });
  } catch (error) {
    next(error);
  }
});
// *************End***********

// *************Render Create Event page***********
router.get("/events_manage/create", (req, res) => {
  // console.log(req.session.currentUser._id);
  res.render("create_event");
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

// res.render("dashboard", {
//   events: [
//     {
//       image:
//         "https://res.cloudinary.com/dqwbskuge/image/upload/v1607960794/allef-vinicius-DmUbkltYsKI-unsplash_u0hy1a.jpg",
//       title: "test",
//       description:
//         "Render view with the given options and optional callback fn. When a callback function is given a response will not be made automatically, otherwise a response of 200 and text/html is given.Render view with the given options and optional callback fn. When a callback function is given a response will not be made automatically, otherwise a response of 200 and text/html is given.",
//     },
//     {
//       image:
//         "https://res.cloudinary.com/dqwbskuge/image/upload/v1607960794/allef-vinicius-DmUbkltYsKI-unsplash_u0hy1a.jpg",
//       title: "test",
//       description:
//         "Render view with the given options and optional callback fn. When a callback function is given a response will not be made automatically, otherwise a response of 200 and text/html is given.Render view with the given options and optional callback fn. When a callback function is given a response will not be made automatically, otherwise a response of 200 and text/html is given.",
//     },
//     {
//       image:
//         "https://res.cloudinary.com/dqwbskuge/image/upload/v1607960794/allef-vinicius-DmUbkltYsKI-unsplash_u0hy1a.jpg",
//       title: "test",
//       description:
//         "Render view with the given options and optional callback fn. When a callback function is given a response will not be made automatically, otherwise a response of 200 and text/html is given.Render view with the given options and optional callback fn. When a callback function is given a response will not be made automatically, otherwise a response of 200 and text/html is given.",
//     },
//   ],
//   myevents: [
//     {
//       image:
//         "https://res.cloudinary.com/dqwbskuge/image/upload/v1607960794/allef-vinicius-DmUbkltYsKI-unsplash_u0hy1a.jpg",
//       title: "lol",
//       description:
//         "the given options and optional callback fn. When a callback function is given a response will not be made automatically, otherwise a response of 200 and text/html is given.Render view with the given options and optional callback fn. When a callback function is given a response will not be made automatically, otherwise a response of 200 and text/html is given.",
//     },
//     {
//       image:
//         "https://res.cloudinary.com/dqwbskuge/image/upload/v1607960794/allef-vinicius-DmUbkltYsKI-unsplash_u0hy1a.jpg",
//       title: "test",
//       description:
//         "Render view with the given options and optional callback fn. When a callback function is given a response will not be made automatically, otherwise a response of 200 and text/html is given.Render view with the given options and optional callback fn. When a callback function is given a response will not be made automatically, otherwise a response of 200 and text/html is given.",
//     },
//     {
//       image:
//         "https://res.cloudinary.com/dqwbskuge/image/upload/v1607960794/allef-vinicius-DmUbkltYsKI-unsplash_u0hy1a.jpg",
//       title: "test",
//       description:
//         "Render view with the given options and optional callback fn. When a callback function is given a response will not be made automatically, otherwise a response of 200 and text/html is given.Render view with the given options and optional callback fn. When a callback function is given a response will not be made automatically, otherwise a response of 200 and text/html is given.",
//     },
//   ],
// });

module.exports = router;
