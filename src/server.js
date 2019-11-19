// Import Express Instance
import app from './lib/app';

const router = require('./routes/index');
app.use('/rest', router);

// Catch all if not found
app.use((req, res, next) => {
  next({ status: 404, message: '404 Not Found' });
});

import errorHandler from './lib/errorHandler';
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log('Listening on port: ' + process.env.PORT);
});
