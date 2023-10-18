const express = require("express");//requerir solamente ROUTER de express
const path = require('path');
const multer = require('multer');
const userController = require("../controllers/user-controller"); 
const usersRouter = express.Router(); 
const validations = require("../validaciones/login-validation");
const registerValidations = require("../validaciones/register-validation"); /* quizas una sola validacion alcance para las dos */
const validateForm = require("../middlewares/validate-form"); 



const storage = multer.diskStorage({
    destination: path.join(__dirname, '../../public/images/users'),
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
    },
  });


  
  const upload = multer({
    storage: storage,
  }); 

usersRouter.get("/users", userController.userList); 
usersRouter.get("/:id/users", userController.userDetail);

usersRouter.get("/login", userController.showLogin); 
usersRouter.post("/login", validations, validateForm, userController.login);

usersRouter.get("/register", userController.registerForm); 
usersRouter.post("/register", upload.single("avatar"), registerValidations, validateForm, userController.register); /* agregue el MDW de validateForm */

usersRouter.delete("/:id", userController.destroy);
  
usersRouter.get("/:id", userController.profile);
  
usersRouter.get("/:id/user", userController.profileEdit);
usersRouter.put("/:id/edit",upload.single("avatar"), userController.update);  


module.exports = usersRouter;