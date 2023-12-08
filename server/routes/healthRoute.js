const getHealth = require("../controllers/healthController.js");

const router = require("express").Router();

router.get("/health", getHealth);

module.exports = router;
