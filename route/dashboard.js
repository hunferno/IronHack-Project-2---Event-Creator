const express = require("express");
const router = new express.Router();
const EventModel = require("./../models/event");
const UserModel = require("./../models/user");

router.get("/dashboard", (req, res) => {
  res.render("dashboard", {
    events: [
        {
            image:
              "https://res.cloudinary.com/dqwbskuge/image/upload/v1607960794/allef-vinicius-DmUbkltYsKI-unsplash_u0hy1a.jpg",
            title: "test",
            description:
              "Render view with the given options and optional callback fn. When a callback function is given a response will not be made automatically, otherwise a response of 200 and text/html is given.Render view with the given options and optional callback fn. When a callback function is given a response will not be made automatically, otherwise a response of 200 and text/html is given.",
          },
          {
            image:
              "https://res.cloudinary.com/dqwbskuge/image/upload/v1607960794/allef-vinicius-DmUbkltYsKI-unsplash_u0hy1a.jpg",
            title: "test",
            description:
              "Render view with the given options and optional callback fn. When a callback function is given a response will not be made automatically, otherwise a response of 200 and text/html is given.Render view with the given options and optional callback fn. When a callback function is given a response will not be made automatically, otherwise a response of 200 and text/html is given.",
          },
          {
            image:
              "https://res.cloudinary.com/dqwbskuge/image/upload/v1607960794/allef-vinicius-DmUbkltYsKI-unsplash_u0hy1a.jpg",
            title: "test",
            description:
              "Render view with the given options and optional callback fn. When a callback function is given a response will not be made automatically, otherwise a response of 200 and text/html is given.Render view with the given options and optional callback fn. When a callback function is given a response will not be made automatically, otherwise a response of 200 and text/html is given.",
          },
    ],
    myevents: [
        {
            image:
              "https://res.cloudinary.com/dqwbskuge/image/upload/v1607960794/allef-vinicius-DmUbkltYsKI-unsplash_u0hy1a.jpg",
            title: "lol",
            description:
              "the given options and optional callback fn. When a callback function is given a response will not be made automatically, otherwise a response of 200 and text/html is given.Render view with the given options and optional callback fn. When a callback function is given a response will not be made automatically, otherwise a response of 200 and text/html is given.",
          },
          {
            image:
              "https://res.cloudinary.com/dqwbskuge/image/upload/v1607960794/allef-vinicius-DmUbkltYsKI-unsplash_u0hy1a.jpg",
            title: "test",
            description:
              "Render view with the given options and optional callback fn. When a callback function is given a response will not be made automatically, otherwise a response of 200 and text/html is given.Render view with the given options and optional callback fn. When a callback function is given a response will not be made automatically, otherwise a response of 200 and text/html is given.",
          },
          {
            image:
              "https://res.cloudinary.com/dqwbskuge/image/upload/v1607960794/allef-vinicius-DmUbkltYsKI-unsplash_u0hy1a.jpg",
            title: "test",
            description:
              "Render view with the given options and optional callback fn. When a callback function is given a response will not be made automatically, otherwise a response of 200 and text/html is given.Render view with the given options and optional callback fn. When a callback function is given a response will not be made automatically, otherwise a response of 200 and text/html is given.",
          },
    ],
  });
});

module.exports = router;
