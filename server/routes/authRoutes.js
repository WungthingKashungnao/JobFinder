const { registerUser, loginUser } = require("../controllers/authController.js");

const router = require("express").Router();

router.post("/registerUser", registerUser);
router.post("/loginUser", loginUser);
module.exports = router;
