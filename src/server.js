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

app.listen(3000, () => {
  console.log('Listening on port: ' + 3000);
});
