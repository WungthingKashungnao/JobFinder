const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/authController.js");

const router = require("express").Router();

router.post("/registerUser", registerUser);
router.post("/loginUser", loginUser);
router.get("/logoutUser", logoutUser);
module.exports = router;
