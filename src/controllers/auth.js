const router = require("express").Router();
import asyncHandler from "express-async-handler";
const { getAuthUrl } = require("../services/auth");

const fs = require("fs");
const { calendarCheck } = require("../services/calendarCheck");
import { credentials } from "../lib/credentials.js";

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    res.send(await getAuthUrl(credentials));
  })
);

module.exports = router;
