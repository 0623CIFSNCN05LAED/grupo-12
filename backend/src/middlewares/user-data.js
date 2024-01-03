const userDataMiddleware = (req, res, next) => {
  const userData = req.session.userData; 
  res.locals.userData = userData;
  next();
} 

module.exports = userDataMiddleware;