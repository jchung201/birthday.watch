const router = require("express").Router();
import asyncHandler from "express-async-handler";
const { listEvents } = require("../services/listEvents");
const { createEvent } = require("../services/createEvent");
const { calendarCheck } = require("../services/calendarCheck");

router
  .get(
    "/",
    asyncHandler(async (req, res, next) => {
      const { token } = req.body;
      await calendarCheck(token, (err, calendar) => {
        if (err) return next(err);
        listEvents(token, calendar.id, (err, events) => {
          if (err) return next(err);
          res.send(events);
        });
      });
    })
  )
  .post(
    "/",
    asyncHandler(async (req, res, next) => {
      await calendarCheck(req.body.token, (err, calendar) => {
        const { token, date } = req.body;
        if (err) return next(err);
        createEvent(token, calendar.id, date, (err, events) => {
          if (err) return next(err);
          res.send(events);
        });
      });
      console.log("hi");
    })
  );

module.exports = router;
