// Import Express Instance
import app from './lib/app';

const router = require('./routes/index');
app.use('/rest', router);

import errorHandler from './lib/errorHandler';
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Listening on port: ' + 3000);
});
