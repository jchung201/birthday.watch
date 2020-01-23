// Import Express Instance
import app from './lib/app';

const router = require('./routes/index');
app.use('/rest', router);

// Catch all 404 if not found
import createError from 'http-errors';
app.use((req, res, next) => {
  next(createError(404, '404 Not Found!'));
});

import errorHandler from './lib/errorHandler';
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log('Listening on port: ' + process.env.PORT);
});
