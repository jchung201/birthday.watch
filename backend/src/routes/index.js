const express = require('express');
const router = express.Router();

const auth = require('../controllers/auth');
router.use('/auth', auth);

const birthdays = require('../controllers/birthdays');
router.use('/birthdays', birthdays);

module.exports = router;
