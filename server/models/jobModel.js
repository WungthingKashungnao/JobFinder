const mongoose = require("mongoose");

const JobSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
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
    type: String,
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
    type: String,
    required: true,
  },
  information: {
    type: String,
    required: true,
  },
});

const JobModel =
  mongoose.models.JobModel || mongoose.model("JobModel", JobSchema);
module.exports = JobModel;
