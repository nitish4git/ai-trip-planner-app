const mongoose = require("mongoose");
// const tripSchema = new mongoose.Schema(
//   {
//     place: { type: String, required: true},
//     coutntry: {type: String, required: true},
//     tripDate: {type: String, required: true},
//     postedBy: {type: mongoose.Schema.ObjectId,ref: "user",required: true,},
//   },
//   { timestamps: true }
// );

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // trips:[tripSchema]
  },
  { timestamps: true }
);

const user = new mongoose.model("user", userSchema);

module.exports = user;
