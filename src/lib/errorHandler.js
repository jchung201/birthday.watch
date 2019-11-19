import createError from 'http-errors';

export default (error, req, res, next) => {
  let message;
  if (error.status) {
    message = error;
  } else {
    message = createError(500, 'Sorry, there was an internal error.');
  }
  res.status(message.statusCode || message.status || 500).json(message);
};
