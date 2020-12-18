const EventModel = require("./../models/event");
require("./../app");

const events = [
  {
    title: "Event 1",
    maxParticipant: 1,
    dateStart: "24/12/2020",
    dateEnd: "24/12/2020",
    startTime: "21:00",
    endTime: "23:30",
    eventType: "public",
    location: {
      adress: "20 avenue du général Leclerc",
      zipCode: "94000",
      city: "CRÉTEIL",
    },
    description:
      "If you want to pass an amazing time with us, join us to participate at...",
    image:
      "https://res.cloudinary.com/dqwbskuge/image/upload/v1607960627/michelle-mcewen-yk2VUa5vtA0-unsplash_rf5d8s.jpg",
  },

  {
    title: "Event 2",
    maxParticipant: 1,
    dateStart: "24/12/2020",
    dateEnd: "24/12/2020",
    startTime: "21:00",
    endTime: "23:30",
    eventType: "public",
    location: {
      adress: "20 avenue du général Leclerc",
      zipCode: "94000",
      city: "CRÉTEIL",
    },
    description:
      "If you want to pass an amazing time with us, join us to participate at...",
    image:
      "https://res.cloudinary.com/dqwbskuge/image/upload/v1607960794/allef-vinicius-DmUbkltYsKI-unsplash_u0hy1a.jpg",
  },

  {
    title: "Event 3",
    maxParticipant: 1,
    dateStart: "24/12/2020",
    dateEnd: "24/12/2020",
    startTime: "21:00",
    endTime: "23:30",
    eventType: "public",
    location: {
      adress: "20 avenue du général Leclerc",
      zipCode: "94000",
      city: "CRÉTEIL",
    },
    description:
      "If you want to pass an amazing time with us, join us to participate at...",
    image:
      "https://res.cloudinary.com/dqwbskuge/image/upload/v1607960795/anna-vander-stel-2OAUj3l6zc4-unsplash_uxzhqw.jpg",
  },

  {
    title: "Event 4",
    maxParticipant: 1,
    dateStart: "24/12/2020",
    dateEnd: "24/12/2020",
    startTime: "21:00",
    endTime: "23:30",
    eventType: "public",
    location: {
      adress: "20 avenue du général Leclerc",
      zipCode: "94000",
      city: "CRÉTEIL",
    },
    description:
      "If you want to pass an amazing time with us, join us to participate at...",
    image:
      "https://res.cloudinary.com/dqwbskuge/image/upload/v1607960795/anthony-delanoix-hzgs56Ze49s-unsplash_kvjnkn.jpg",
  },

  {
    title: "Event 5",
    maxParticipant: 1,
    dateStart: "24/12/2020",
    dateEnd: "24/12/2020",
    startTime: "21:00",
    endTime: "23:30",
    eventType: "public",
    location: {
      adress: "20 avenue du général Leclerc",
      zipCode: "94000",
      city: "CRÉTEIL",
    },
    description:
      "If you want to pass an amazing time with us, join us to participate at...",
    image:
      "https://res.cloudinary.com/dqwbskuge/image/upload/v1607960958/mohau-mannathoko-upvUrxqrmro-unsplash_r5ok1c.jpg",
  },

  {
    title: "Event 6",
    maxParticipant: 1,
    dateStart: "24/12/2020",
    dateEnd: "24/12/2020",
    startTime: "21:00",
    endTime: "23:30",
    eventType: "public",
    location: {
      adress: "20 avenue du général Leclerc",
      zipCode: "94000",
      city: "CRÉTEIL",
    },
    description:
      "If you want to pass an amazing time with us, join us to participate at...",
    image:
      "https://res.cloudinary.com/dqwbskuge/image/upload/v1607961077/samantha-gades-x40Q9jrEVT0-unsplash_jug86o.jpg",
  },

  {
    title: "Event 7",
    maxParticipant: 1,
    dateStart: "24/12/2020",
    dateEnd: "24/12/2020",
    startTime: "21:00",
    endTime: "23:30",
    eventType: "public",
    location: {
      adress: "20 avenue du général Leclerc",
      zipCode: "94000",
      city: "CRÉTEIL",
    },
    description:
      "If you want to pass an amazing time with us, join us to participate at...",
    image:
      "https://res.cloudinary.com/dqwbskuge/image/upload/v1607961077/tyler-nix-V3dHmb1MOXM-unsplash_qghh4v.jpg",
  },

  {
    title: "Event 8",
    maxParticipant: 1,
    dateStart: "24/12/2020",
    dateEnd: "24/12/2020",
    startTime: "21:00",
    endTime: "23:30",
    eventType: "public",
    location: {
      adress: "20 avenue du général Leclerc",
      zipCode: "94000",
      city: "CRÉTEIL",
    },
    description:
      "If you want to pass an amazing time with us, join us to participate at...",
    image:
      "https://res.cloudinary.com/dqwbskuge/image/upload/v1607961178/teemu-paananen-bzdhc5b3Bxs-unsplash_xoqohq.jpg",
  },

  {
    title: "Event 9",
    maxParticipant: 1,
    dateStart: "24/12/2020",
    dateEnd: "24/12/2020",
    startTime: "21:00",
    endTime: "23:30",
    eventType: "public",
    location: {
      adress: "20 avenue du général Leclerc",
      zipCode: "94000",
      city: "CRÉTEIL",
    },
    description:
      "If you want to pass an amazing time with us, join us to participate at...",
    image:
      "https://res.cloudinary.com/dqwbskuge/image/upload/v1607961388/seth-reese-lA2qXhn4L2A-unsplash_ko8eh5.jpg",
  },
];

async function insertEvents() {
  try {
    await EventModel.deleteMany();
    const inserted = await EventModel.insertMany(events);
    console.log(`seed_events done : ${inserted.length} documents inserted!`);
  } catch (error) {
    console.error(error);
  }
}
insertEvents();
