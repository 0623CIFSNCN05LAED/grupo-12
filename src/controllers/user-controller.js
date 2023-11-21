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
    console.log(req.body);

    //  const resultValidation = validationResult(req);

    // if (resultValidation.errors.length > 0) {
    //   return res.render('login', { 
    //     errors: resultValidation.mapped(), 
    //     oldData: req.body,

    //     });
    // } 
    const findUser = userServices.getByEmail(req.body.email).then((user)=>{
      if (!user || user.length==0) {
        return res.render("login",{
          errors: {
            email:{
              msg: "Este email no se encuentra registrado"
            }
          },
          oldData: req.body
        });
      } 
    
      if (req.body.recordame === "true") {
        res.cookie("recordame", req.body.email, { maxAge: 200000 });
      } else {
        res.clearCookie("recordame");
      } 

    const passwordMatch = bcrypt.compareSync(req.body.password, user[0].password);
      if (!passwordMatch && false) {
        return res.render("login",{
          errors: {
            email:{
              msg: "La contraseña es incorrecta"
            }
          },
          oldData: req.body
        });
      } else {
        req.session.userData = user;
        return res.redirect("/");
      }
    });
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
    }
    
     const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render("register", { 
        errors: resultValidation.mapped(), 
        oldData: req.body})
      } 
      
    const checkEmail = userServices.getByEmail( req.body.email) 
    if (checkEmail) {
      return res.render("register",{
        errors: {
          email:{
            msg: "Este email se encuentra registrado"
          }
        },
        oldData: req.body
      });
    } else {
      userServices.createUser(user);
      return res.redirect("/");
    }  
      
    }, 
    logout: (req, res) => {
      res.clearCookie("recordame");
      req.session.destroy();
      return res.redirect("/");
    },

  profileEdit: (req, res) => {
    const id = req.params.id;
    const user = userServices.getUser(id);
    res.render("user-profile-edit-form", { user });
  }, 

 /** */ profile: (req, res) => {
    return res.render("profile",{});
  }, 

  update: async (req, res) => {
    try {
      const user = req.body;
      const id = req.params.id;
      await userServices.updateUser(id, user);
      res.redirect("/");
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
      res.status(500).send("Error al actualizar usuario");
    }
  },
  

  destroy: async (req, res) => {
    try {
      const id = req.params.id;
      await userServices.destroyUser(id);
      res.redirect('/');
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      res.status(500).send("Error al eliminar usuario");
    }
  },
}