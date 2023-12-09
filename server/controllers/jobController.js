const jobModel = require("../models/jobModel.js");
const createError = require("../utils/error.js");

const createJob = async (req, res, next) => {
  try {
    if (
      !req.body.name ||
      !req.body.logoUrl ||
      !req.body.position ||
      !req.body.salary ||
      !req.body.jobType ||
      !req.body.jobPlace ||
      !req.body.location ||
      !req.body.description ||
      !req.body.about ||
      !req.body.skills ||
      !req.body.information
    ) {
      console.log({
        message: `all fields are required`,
      });
      return next(createError(400, "all fields are required"));
    }

    if (
      req.body.name === null ||
      req.body.logoUrl === null ||
      req.body.position === null ||
      req.body.salary === null ||
      req.body.jobType === null ||
      req.body.jobPlace === null ||
      req.body.location === null ||
      req.body.description === null ||
      req.body.about === null ||
      req.body.skills === null ||
      req.body.information === null
    ) {
      console.log({
        message: `all fields are required`,
      });
      return next(createError(400, "all fields are required"));
    }

    const newJob = await jobModel(req.body);
    newJob.save();
    res.status(200).json({
      messge: "successfully created a new job",
      newJob,
    });
  } catch (error) {
    console.log({
      message: "Error creating job",
      error,
    });
    next(error);
  }
};

module.exports = { createJob };
