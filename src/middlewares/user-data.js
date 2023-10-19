module.exports = (req, res, next) => {
    const userData = req.session.userData; 
    res.locals.userData = userData;
    next();
  }
