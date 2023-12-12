const { Users } = require("../database/models");
const Sequelize = require("sequelize");

const userServices = {
  getAllUsers: async () => {
    return await Users.findAll();
  },

  getUser: async (id) => {
    return await Users.findByPk(id);
  },

  /**  getUserById: (id) => {
      const user = Users.findById(id);
      return user;
    }, Hace la misma funcion que el getUser*/

  getByEmail: async (emailValue) => {
    return await Users.findAll({where: {email: emailValue}});
  },
  createUser: async (user) => {
    try
    {
      console.log(user);
      return await Users.create(user);
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      return null;
    }
  },
  updateUser: (id, user) => {
    return Users.update(user, {where: { id } });
  },
  destroyUser: (id) => {
    return Users.destroy({where: { id } });
  },

  getAllUsersAndCount: ({
    pageSize, offset
  }) => {
    return Users.findAndCountAll({
      limit: pageSize, 
      offset: offset
    })
  },
};

module.exports = userServices;
