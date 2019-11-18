const router = require("express").Router();
import asyncHandler from "express-async-handler";
const { listEvents } = require("../services/listEvents");
const { calendarCheck } = require("../services/calendarCheck");

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    await calendarCheck(req.body.token, (err, calendar) => {
      if (err) return next(err);
      res.send(calendar);
    });
  })
);

module.exports = router;
