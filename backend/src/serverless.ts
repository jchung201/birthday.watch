// Import Express Instance
import app from './lib/app';

import router from './lib/router';
app.use('/rest', router);

// Catch all 404 if not found
import httpErrors from 'http-errors';
app.use((_req, _res, next) => {
  next(httpErrors(404, '404 Not Found!'));
});

import errorHandler from './lib/errorHandler';
app.use(errorHandler);

import serverlessHttp from 'serverless-http';
module.exports.handler = serverlessHttp(app);
