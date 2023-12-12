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
router.get("/filterJOb/:userId", verifyUser, filterJob);
router.get(
  "/showJobDescription/:userId/:jobId",
  verifyUser,
  showJobPostDescription
);
module.exports = router;
