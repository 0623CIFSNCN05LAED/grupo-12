const userServices = require('../services/usersServices');
const { validationResult } = require('express-validator') 
const bcrypt = require('bcrypt');

module.exports={
    
    showLogin: (req, res) => {
    res.render("login");
  }, 

  login: (req, res) =>{ 
    console.log("Controlador login se está ejecutando.");
    const data = req.body; 
    console.log(data) 

     const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render('login', { 
        errors: resultValidation.mapped(), 
        oldData: req.body,

        });
      } 
      
      const findUser = userServices.getByEmail("email", req.body.email);
      if (!findUser) {
        return res.render("login",{
          errors: {
            email:{
              msg: "Este email no se encuentra registrado"
            }
          },
          oldData: req.body
        });
      } 
    
    if (req.body.recordame != undefined) {
      res.cookie("recordame", req.body.email, { maxAge: 200000 });
    } 

    const passwordMatch = bcrypt.compareSync(req.body.password, findUser.password);
    if (!passwordMatch) {
      return res.render("login",{
        errors: {
          password:{
            msg: "Los datos son incorrectos. Verifique y vuelva a intentar"
          }
        },
        oldData: req.body
      });
    } else {
      req.session.userData = findUser;
      return res.redirect("/");
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
      password: bcrypt.hashSync(req.body.password, 5),
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
