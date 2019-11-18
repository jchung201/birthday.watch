const router = require("express").Router();
import asyncHandler from "express-async-handler";
const { getAuthUrl, getAuthToken } = require("../services/auth");

router
  .get(
    "/url",
    asyncHandler(async (req, res, next) => {
      res.send(await getAuthUrl());
    })
  )
  .get(
    "/token",
    asyncHandler(async (req, res, next) => {
      getAuthToken(req.query.code, (err, token) => {
        if (err) return next(err);
        res.send(token);
      });
    })
  );

module.exports = router;
