// auth.js
const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  res.locals.logueado = false;

  const token = req.header("Authorization");

  if (!token) {
    next(); // No hay token, permitir que otros middlewares continúen
    return;
  }

  try {
    const decoded = jwt.decode(token);
    req.user = decoded.user;
    res.locals.logueado = true;
    res.locals.userLogged = req.user;

    // Distinguir entre admin y usuario común
    if (req.user.email.endsWith("@bikeworld.com")) {
      req.user.isAdmin = true;
    } else {
      req.user.isAdmin = false;
    }
    // Asignar el rol al usuario
    req.user.role = req.user.email.endsWith("@bikeworld.com") ? 1 : 0;
  } catch (error) {
    console.error("Error al decodificar el token:", error.message);
  }

  next();
};

const isAdmin = (req, res, next) => {
  // Verificar si el usuario es un administrador
  if (req.user && req.user.isAdmin) {
    res.locals.isAdmin = true;
  } else {
    res.locals.isAdmin = false;
  }
  next();
};

module.exports = {
  authenticateUser,
  isAdmin,
};
