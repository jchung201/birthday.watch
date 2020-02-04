import * as express from 'express';
const router = express.Router();
import expressAsyncHandler from 'express-async-handler';
import { getAuthUrl, getAuthToken } from '../services/auth';
import httpErrors from 'http-errors';

router
  .get(
    '/url',
    expressAsyncHandler(async (_req, res, next) => {
      getAuthUrl((err, url) => {
        if (err) return next(err);
        res.send(url);
      });
    }),
  )
  .post(
    '/token',
    expressAsyncHandler(async (req, res, next) => {
      const { code } = req.body;
      if (!code) return next(httpErrors(401, 'Did not include code!'));
      getAuthToken(code, (err, token) => {
        if (err) return next(err);
        res.send(token);
      });
    }),
  );

export default router;
