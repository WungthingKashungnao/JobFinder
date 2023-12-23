const jobModel = require("../models/jobModel.js");
const UserModel = require("../models/userModel.js");
const createError = require("../utils/error.js");

// create job start
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
    const userId = req.params.userId; // id from params
    // const userId = req.body.userId;

    const recruiterData = await UserModel.findById(userId);
    // logic to split string by comma and store them in an array start
    const skillData = req.body.skills;
    let skillsArray = skillData;
    if (typeof skillData === "string") {
      skillsArray = skillData.split(",").map((skill) => skill.trim());
    }
    // logic to split string by comma and store them in an array end
    const name = req.body.name;
    const recruiter = recruiterData.name;
    const logoUrl = req.body.logoUrl;
    const position = req.body.position;
    const salary = req.body.salary;
    const jobType = req.body.jobType;
    const jobPlace = req.body.jobPlace;
    const location = req.body.location;
    const description = req.body.description;
    const about = req.body.about;
    const skills = skillsArray;
    const information = req.body.information;

    const newJob = await jobModel({
      name,
      recruiter,
      logoUrl,
      position,
      salary,
      jobType,
      jobPlace,
      location,
      description,
      about,
      skills,
      information,
    });
    newJob.save();
    return res.status(200).json({
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
// create job end

// eidt job start
const editJob = async (req, res, next) => {
  try {
    const jobId = req.params.jobId;
    let newJobUpdate = req.body;
    const userId = req.params.userId;
    const recruiterData = await UserModel.findById(userId); //trying to get recruiter name from user model
    const jobRecruiter = await jobModel.findById(jobId); //trying to get recruiter name from jobmodel

    if (recruiterData.name !== jobRecruiter.recruiter) {
      return next(createError(400, "This job post does not belong to you"));
    }

    // logic to split string by comma and store them in an array start
    const skillData = req.body.skills;
    let skillsArray = skillData;
    if (typeof skillData === "string") {
      skillsArray = skillData.split(",").map((skill) => skill.trim());
    }
    // logic to split string by comma and store them in an array end
    newJobUpdate = { ...newJobUpdate, skills: skillsArray };
    const jobToEditUpdate = await jobModel.findByIdAndUpdate(
      jobId,
      {
        ...newJobUpdate,
      },
      { new: true }
    );

    return res.status(200).json({
      messge: "successfully updated  job",
      jobToEditUpdate,
    });
  } catch (error) {
    console.log({
      message: "Error updating job",
      error,
    });
    next(error);
  }
};
// edit job end

// filer job start
const filterJob = async (req, res, next) => {
  try {
    const skills = req.body.skills;
    const position = req.body.title;

    if (!skills && !position) {
      next(createError(400, "atleast one filter field is required"));
    }

    // const filteredJob = await jobModel.find({
    //   $or: [{ skills: `${skills}` }, { position: `${position}` }],
    // });
    const filteredJob = await jobModel.find(
      // {
      //   skills: { $in: `${skills}` },
      // },
      { position: position }
    );

    return res.status(200).json({
      message: "successfully filtered job",
      length: filteredJob.length,
      filteredJob,
      skills,
      position,
    });
  } catch (error) {
    console.log({
      message: "Error filtering job",
      error,
    });

    return next(createError(500, "Error filtering job!"));
  }
};
// filter job end

// show job post description start
const showJobPostDescription = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const jobPost = await jobModel.findById(jobId);
    return res.status(200).json({
      message: "successfully fetched detailed description of job post",
      jobPost,
    });
  } catch (error) {
    console.log({
      message: "error showing job post description",
      status: 500,
    });
    next(createError(500, "error showing job post description"));
  }
};
// show job post description end

module.exports = { createJob, editJob, filterJob, showJobPostDescription };
