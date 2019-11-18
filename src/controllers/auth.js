const router = require("express").Router();
import asyncHandler from "express-async-handler";
const { authorize } = require("../services/authorize");
const fs = require("fs");
const { calendarCheck } = require("../services/calendarCheck");
import { credentials } from "../lib/credentials.js";

router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    console.log(credentials);
    authorize(credentials, calendarCheck, data => {});
  })
);

module.exports = router;
