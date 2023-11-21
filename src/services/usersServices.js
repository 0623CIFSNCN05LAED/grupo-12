const { Users } = require("../database/models");
const Sequelize = require("sequelize");

const userServices = {
  getAllUsers: () => {
    return Users.findAll();
  },

  getUser: (id) => {
    return Users.findById(id);
  },

  /**  getUserById: (id) => {
      const user = Users.findById(id);
      return user;
    }, Hace la misma funcion que el getUser*/

  getByEmail: (emailValue) => {
    return Users.findAll({where: {email: emailValue}});
  },
  createUser: (user) => {
    Users.create(user);
  },
  updateUser: (id, user) => {
    return Users.update(user, {where: { id } });
  },
  destroyUser: (id) => {
    return Users.destroy({where: { id } });
  },
};

module.exports = userServices;
