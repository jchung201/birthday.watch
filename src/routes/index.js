const express = require("express");
const router = express.Router();

const auth = require("../controllers/auth");
router.use("/auth", auth);

module.exports = router;
