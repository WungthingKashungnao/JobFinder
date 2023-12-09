const { createJob } = require("../controllers/jobController.js");
const verifyUser = require("../utils/verify.js");
const router = require("express").Router();

router.post("/createJob/:userId", verifyUser, createJob);
module.exports = router;