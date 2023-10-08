const express = require("express");
const path = require('path');
const multer = require('multer');
const userController = require("../controllers/user-controller"); 
const usersRouter = express.Router();


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

usersRouter.get("/login", userController.login);
usersRouter.get("/register", userController.registerForm); 
usersRouter.post("/register", upload.single("avatar"), userController.register); 

usersRouter.delete("/:id", userController.destroy);
  
usersRouter.get("/:id", userController.profile);
  
usersRouter.get("/:id/user", userController.profileEdit);
usersRouter.put("/:id/edit",upload.single("avatar"), userController.update);  


module.exports = usersRouter;