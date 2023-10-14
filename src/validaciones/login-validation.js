const { body } = require("express-validator"); /* podriamos usar check tambien */

module.exports = [ 
    body("email")
    .notEmpty()
    .withMessage("Debe completar este campo") 
    .bail() 
    .isEmail() 
    .withMessage("Debe ser un email valido "),
    body("contraseña")
    .notEmpty()
    .withMessage("Debe completar este campo") 
    .isLength({ min: 6 })
]
    
