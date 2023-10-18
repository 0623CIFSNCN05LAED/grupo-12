function authMiddleware(req, res, next) {
	if (!req.session.userLogged) {
		return res.redirect('/user/login');
	}
	next();
}

module.exports = authMiddleware;

/* choreado, adaptar (hace lo mismo que user-guard?) */