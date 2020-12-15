const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    age: Number,
    password: String,
    description: String,
    city: String,
    image: String,
    /*id_user: [{ type: Schema.Types.ObjectId, ref: "user" }],*/
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
