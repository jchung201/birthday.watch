const router = require("express").Router();
import asyncHandler from "express-async-handler";
const { listEvents } = require("../services/listEvents");
const { createEvent } = require("../services/createEvent");
const { deleteEvent } = require("../services/deleteEvent");
const { calendarCheck } = require("../services/calendarCheck");

router
  .get(
    "/",
    asyncHandler(async (req, res, next) => {
      const { token } = req.body;
      calendarCheck(token, (err, calendar) => {
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
      let { token, dates } = req.body;
      dates = [
        {
          date: "11/30/2019",
          name: "John Daniel",
          description: "description is awesome",
          days: 5
        }
      ];
      calendarCheck(req.body.token, (err, calendar) => {
        if (err) return next(err);
        createEvent(token, calendar.id, dates, (err, events) => {
          if (err) return next(err);
          res.send(events);
        });
      });
    })
  )
  .delete(
    "/:id",
    asyncHandler(async (req, res, next) => {
      let { token } = req.body;
      await calendarCheck(req.body.token, (err, calendar) => {
        if (err) return next(err);
        deleteEvent(token, calendar.id, req.params.id, (err, message) => {
          if (err) return next(err);
          res.send({ status: 204, message: "Deleted!" });
        });
      });
    })
  );

module.exports = router;
