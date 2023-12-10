const usersServices = require("../services/usersServices");

const recordameMiddleware = (req, res, next) => { 
  
  if (req.cookies.recordame !== undefined && req.session.usuario === undefined) {
    const usuarioLogueado = usersServices.getByEmail(
      "email",
      req.cookies.recordame
    );
     if (usuarioLogueado) {
    req.session.usuario = usuarioLogueado;
    }
  }
  next();

}

module.exports = recordameMiddleware;