const { body } = require("express-validator"); /* podriamos usar check tambien */

module.exports = [ 
    body("nombre")
    .notEmpty()
    .withMessage("Debe completar este campo"),
    body("apellido") 
    .notEmpty()
    .withMessage("Debe completar este campo"),
    body("nacimiento")
    .notEmpty()
    .withMessage("Debe completar este campo"),
    body("domicilio")
    .notEmpty()
    .withMessage("Debe completar este campo"),
    body("email")
    .notEmpty()
    .withMessage("Debe completar este campo") 
    .bail() 
    .isEmail() 
    .withMessage("Debe ser un email valido "),
    body("password")
    .notEmpty()
    .withMessage("Debe completar este campo") 
    .isLength({ min: 6 }),
    body('avatar').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];

		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]
