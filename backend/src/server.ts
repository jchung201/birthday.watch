// Import Express Instance
import app from './lib/app';

import router from './routes/router';
app.use('/rest', router);

// Catch all 404 if not found
import httpErrors from 'http-errors';
app.use((_req, _res, next) => {
  next(httpErrors(404, '404 Not Found!'));
});

import errorHandler from './lib/errorHandler';
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});
