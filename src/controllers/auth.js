const router = require("express").Router();
import asyncHandler from "express-async-handler";

router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    res.send("sup");
  })
);

module.exports = router;
