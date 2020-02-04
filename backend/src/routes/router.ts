import * as express from 'express';
const router = express.Router();

import auth from '../controllers/auth';
router.use('/auth', auth);

import birthdays from '../controllers/birthdays';
router.use('/birthdays', birthdays);

export default router;
