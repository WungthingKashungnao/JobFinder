const mongoose = require("mongoose");
// const JobModel = require("./jobModel.js");

const UsrSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // jobsPosted: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "JobModel",
    //   },
    // ],
  },
  { timestamps: true }
);

const UserModel =
  mongoose.models.UserModel || mongoose.model("UserModel", UsrSchema);
module.exports = UserModel;
