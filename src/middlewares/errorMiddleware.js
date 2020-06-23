// eslint-disable-next-line no-unused-vars
function errorMiddleware(error, req, res, next) {
  console.log(error);
  if (error.status) {
    res.status(error.status).json(error).send();
  } else {
    res.status(500).send();
  }
}

export default errorMiddleware;
