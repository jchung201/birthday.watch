const router = require('express').Router();
import asyncHandler from 'express-async-handler';
const { getAuthUrl, getAuthToken } = require('../services/auth');
import createError from 'http-errors';

router
  .get(
    '/url',
    asyncHandler(async (req, res, next) => {
      getAuthUrl((err, url) => {
        if (err) return next(err);
        res.send(url);
      });
    })
  )
  .post(
    '/token',
    asyncHandler(async (req, res, next) => {
      const { code } = req.body;
      if (!code) return next(createError(404, '404 Not Found!'));
      getAuthToken(code, (err, token) => {
        if (err) return next(err);
        res.send(token);
      });
    })
  );

module.exports = router;
