const router = require('express').Router();
import asyncHandler from 'express-async-handler';
import createError from 'http-errors';
const { listEvents } = require('../services/listEvents');
const { createEvent } = require('../services/createEvent');
const { deleteEvent } = require('../services/deleteEvent');
import { credentials } from '../lib/credentials';
const { patchEvent } = require('../services/patchEvent');
const { calendarCheck } = require('../services/calendarCheck');
const { google } = require('googleapis');

router.use(
  '/',
  asyncHandler(async (req, res, next) => {
    const { token } = req.body;
    // Include entire response from the POST get token response
    if (!token) throw createError(400, 'Forgot token!');
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
      client_id,
      client_secret,
      redirect_uris[0],
    );
    oAuth2Client.setCredentials(token);
    req.auth = oAuth2Client;
    calendarCheck(req.auth, (err, calendar, timeZone) => {
      if (err) return next(err);
      req.calendar = calendar;
      req.timeZone = timeZone;
      next();
    });
  }),
);

router
  .get(
    '/',
    asyncHandler(async (req, res, next) => {
      listEvents(req.auth, req.calendar.id, (err, events) => {
        if (err) return next(err);
        res.send(events);
      });
    }),
  )
  .post(
    '/',
    asyncHandler(async (req, res, next) => {
      const { events } = req.body;
      if (!events) throw createError(400, 'Forgot events to be created!');
      // events = [
      //   {
      //     date: "11/30/2019",
      //     name: "John Daniel",
      //     description: "description is awesome",
      //     days: 5
      //   }
      // ];
      createEvent(
        req.auth,
        req.calendar.id,
        req.timeZone,
        events,
        (err, createdEvents) => {
          if (err) return next(err);
          res.send(createdEvents);
        },
      );
    }),
  )
  .patch(
    '/:id',
    asyncHandler(async (req, res, next) => {
      const { event } = req.body;
      if (!event) throw createError(400, 'Forgot event update details!');
      // event = {
      //   date: "11/30/2019",
      //   name: "Jefferson Daniel",
      //   description: "This has 125125125N!!!",
      //   days: 11
      // };
      patchEvent(
        req.auth,
        req.calendar.id,
        req.timeZone,
        req.params.id,
        event,
        (err, patchedEvent) => {
          if (err) return next(err);
          res.send(patchedEvent);
        },
      );
    }),
  )
  .delete(
    '/:id',
    asyncHandler(async (req, res, next) => {
      deleteEvent(req.auth, req.calendar.id, req.params.id, (err, message) => {
        if (err) return next(err);
        res.send({ status: 204, message: 'Deleted!' });
      });
    }),
  );

module.exports = router;
