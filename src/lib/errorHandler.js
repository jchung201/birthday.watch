export default (error, req, res, next) => {
  console.log(error);
  res.status(500).json({ status: 500, message: 'I apologize for this error!' });
};
