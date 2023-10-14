const db = require("../data/db");  

const userServices = {
    getAllUsers: () => {
      return db.users.findAll();
    },
    getUser: (id) => {
      return db.users.findById(id);
    },
    getUserById: (id) => {
      const user = db.users.findById(id);
      return user;
    }, 
    getByEmail: (email, text) => {
       return db.users.findByField(email, text)
    },
    createUser: (user) => {
      db.users.create(user);
    },
    updateUser: (id, user) => {
      db.users.update(id, user);
    },
    destroyUser: (id) => {
      db.users.destroy(id);
    },
  };
  
  module.exports = userServices;