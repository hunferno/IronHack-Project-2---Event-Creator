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
      region: String,
    },
    description: String,
    maxParticipant: Number,
    dateStart: Date,
    dateEnd: Date,
    time: Number,
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/dke1st5wz/image/upload/v1607328768/sample.jpg",
    },
    eventType: String,
    id_user: [{ type: Schema.Types.ObjectId, ref: "user" }],
  },
  { timestamps: true }
);

const EventModel = mongoose.model("event", EventsSchema);

module.exports = EventModel;

// ********To build my route*********
// {{#each posts}}
//     <li>
//         {{ this.title }} by {{this.author.username}}
//         <a href="/posts/{{this._id}}">Read more</a>
//     </li>
//   {{/each}}
