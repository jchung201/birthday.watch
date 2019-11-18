const router = require("express").Router();
import asyncHandler from "express-async-handler";
const { listEvents } = require("../services/listEvents");
const { calendarCheck } = require("../services/calendarCheck");

router
  .get(
    "/",
    asyncHandler(async (req, res, next) => {
      await calendarCheck(req.body.token, (err, calendar) => {
        if (err) return next(err);
        listEvents(req.body.token, calendar.id, (err, events) => {
          if (err) return next(err);
          res.send(events);
        });
      });
    })
  )
  .post(
    "/",
    asyncHandler(async (req, res, next) => {
      console.log("hi");
    })
  );

module.exports = router;
