export default (error, req, res, next) => {
  console.log(error);
  if (error.status) {
    return res.status(error.status).json(error);
  }
  res.status(500).json({ status: 500, message: 'I apologize for this error!' });
};
