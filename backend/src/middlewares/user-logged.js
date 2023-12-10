const usersServices = require("../services/usersServices");

const userLogged = (req, res, next) => {
  res.locals.logueado = false;

  const emailCookie = req.cookies.recordame;
  const userCookie = usersServices.getByEmail("email", emailCookie);

  if (userCookie !== undefined) {
    res.locals.userLogged = userCookie;
  }

  if (req.session.usuario !== undefined) {
    res.locals.logueado = true;
    res.locals.userLogged = req.session.usuario;
  }

  next();
}

module.exports = userLogged;