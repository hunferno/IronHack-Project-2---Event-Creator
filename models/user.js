const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    mail: String,
    age: Number,
    password : String,
    description : String,
    city : String,
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/dke1st5wz/image/upload/v1607328768/sample.jpg",
    },
    /*id_user: [{ type: Schema.Types.ObjectId, ref: "user" }],*/
  },
  { timestamps: true }
    
);
    

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;