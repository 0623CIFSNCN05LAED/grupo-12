const userServices = require("../services/usersServices");
const { validationResult } = require('express-validator')

module.exports={
    
    showLogin: (req, res) => {
    res.render("login");
  }, 

  login: (req, res) =>{
    const data = req.body; 
    console.log(data) 

    req.session.userData = data;

    res.redirect("/")
  },

  loginValidation: (req, res) => {    /* VER SI ESTO VA ACA */
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render('login', { 
        errors: resultValidation.mapped(),
        oldData: req.body
        });
      }   
  },

  registerForm: (req, res) => {
    res.render("register");
  }, 

  userList: (req, res) => {
    const users = userServices.getAllUsers();
    res.render("users-list", { users });
  }, 

  userDetail: (req, res) =>{ 
    const id = req.params.id;
    const user = userServices.getUserById(id); 
    res.render("user-detail", { user });
  },

  register: (req, res) => {
    const user = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      nacimiento: req.body.nacimiento,
      contraseña: req.body.contraseña,
      confirmarContraseña: req.body.confirmarContraseña,
      NumContacto: Number(req.body.NumContacto),
      domicilio: req.body.domicilio,
      avatar: req.file ? "/images/users/" + req.file.filename : null,
    };
    userServices.createUser(user);
    res.redirect("/");
  }, 

  profileEdit: (req, res) => {
    const id = req.params.id;
    const user = userServices.getUser(id);
    res.render("user-profile-edit-form", { user });
  }, 

  profile: (req, res) => {
    return res.render("profile");
  }, 

  update: (req, res) => {
    const user = req.body;
    const id = req.params.id;
    userServices.updateUser(id, user);
    res.redirect("/");
  }, 

  destroy: (req, res) => {
    const id = req.params.id;
    userServices.destroyUser(id);
    res.redirect("/");
  }

}
