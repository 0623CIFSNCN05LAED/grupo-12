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

     const resultValidation = validationResult(req);

     if (resultValidation.errors.length > 0) {
       return res.render('login', { 
         errors: resultValidation.mapped(), 
         oldData: req.body,

         });
     } 
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
      if (!passwordMatch) {
        return res.render("login",{
          errors: {
            email:{
              msg: "La contraseña es incorrecta"
            }
          },
          oldData: req.body
        });
      } else {
        req.session.userData = user[0];
        return res.redirect("/");
      }
    });
  },

  registerForm: (req, res) => {
    res.render("register");
  }, 

  userList: async (req, res) => {
    const users = await userServices.getAllUsers();
    console.log(users)
    res.render("users-list", { users });
  }, 

  userDetail: async (req, res) =>{ 
    const id = req.params.id;
    const user = await userServices.getUser(id); 
    res.render("user-detail", { user });
  },

  register: async (req, res) => { 
    const user = {
      //id:(req.body.),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      birthday: req.body.birthday,
      password: bcrypt.hashSync(req.body.password, 5),
      phone:(req.body.phone),
      address: req.body.address,
      avatar: req.file ? "/images/users/" + req.file.filename : null,
    }
    
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
    return res.render("register", { 
    errors: resultValidation.mapped(), 
    oldData: req.body})
    } 
      
    const checkEmail = userServices.getByEmail( req.body.email)
    .then(async (response)=>{
      if (response && response.length>0) {
        return res.render("register",{
          errors: {
            email:{
              msg: "Este email se encuentra registrado"
            }
          },
          oldData: req.body
        });
      } else {
        await userServices.createUser(user);
        return res.redirect("/");
      }  
    })
      
    }, 
    logout: (req, res) => {
      res.clearCookie("recordame");
      req.session.destroy();
      return res.redirect("/");
    },

  profileEdit:async (req, res) => {
    const id = req.params.id;
    const user = await userServices.getUser(id);
    res.render("user-profile-edit-form", { user });
  }, 

  profile: (req, res) => {
    return res.render("profile",{userData: req.session.userData});
  }, 

  update: async (req, res) => {
    try {
      const user = req.body;
      const password = bcrypt.hashSync(req.body.password, 5);
      const id = req.params.id;
      await userServices.updateUser(id, user, password);
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