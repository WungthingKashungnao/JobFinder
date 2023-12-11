const {
  createJob,
  editJob,
  filterJob,
} = require("../controllers/jobController.js");
const verifyUser = require("../utils/verify.js");
const router = require("express").Router();

router.post("/createJob/:userId", verifyUser, createJob);
router.put("/updateJOb/:userId/:jobId", verifyUser, editJob);
router.get("/filterJOb/:userId", verifyUser, filterJob);
module.exports = router;
