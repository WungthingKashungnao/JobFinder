const {
  createJob,
  editJob,
  filterJob,
  showJobPostDescription,
} = require("../controllers/jobController.js");
const verifyUser = require("../utils/verify.js");
const router = require("express").Router();

router.post("/createJob/:userId", verifyUser, createJob);
router.put("/updateJOb/:userId/:jobId", verifyUser, editJob);
router.get("/filterJOb", filterJob);
router.get("/showJobDescription/:jobId", showJobPostDescription);
module.exports = router;
