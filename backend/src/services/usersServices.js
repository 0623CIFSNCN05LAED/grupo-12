const { Users } = require("../database/models");
const Sequelize = require("sequelize");

const userServices = {
  getAllUsers: async () => {
    return await Users.findAll();
  },

  getUser: async (id) => {
    return await Users.findByPk(id);
  },


  getByEmail: async (emailValue) => {
    return await Users.findOne({where: {email: emailValue}});
  },
 
  createUser: async (user) => {
    try {
      console.log('Creando usuario con la siguiente información:', user);
      const createdUser = await Users.create(user);
      console.log('Usuario creado con éxito:', createdUser);
      return createdUser;
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
