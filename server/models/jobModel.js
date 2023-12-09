const mongoose = require("mongoose");
// const UserModel = require("./userModel.js");

const JobSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    logoUrl: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    jobPlace: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
      required: true,
    },
    information: {
      type: String,
      required: true,
    },
    // employer: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "UserModel",
    // },
  },
  { timestamps: true }
);

const JobModel =
  mongoose.models.JobModel || mongoose.model("JobModel", JobSchema);
module.exports = JobModel;
