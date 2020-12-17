const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventsSchema = new Schema(
  {
    title: String,
    location: {
      adress: String,
      zipCode: String,
      city: String,
      country: String,
    },
    description: String,
    maxParticipant: Number,
    dateStart: String,
    dateEnd: String,
    startTime: String,
    endTime: String,
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/dke1st5wz/image/upload/v1607328768/sample.jpg",
    },
    eventType: String,
    participant_ids: [{type: Schema.Types.ObjectId, ref: "user" }],
    id_user: { type: Schema.Types.ObjectId, ref: "user" },
    // id_user: [{ type: Schema.Types.ObjectId, ref: "user" }],
  },
  { timestamps: true }
);

const EventModel = mongoose.model("event", EventsSchema);

module.exports = EventModel;

// ********To build my route*********
