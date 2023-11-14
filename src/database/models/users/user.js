module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      "Users",
      {
        firstName: {
          field: "first_name",
          type: DataTypes.STRING,
        },
        lastName: {
          field: "last_name",
          type: DataTypes.STRING,
        },
        email: {
          field: "email",
          type: DataTypes.STRING,
        },
        birthday: {
          field: "birthday",
          type: DataTypes.DATE,
        },
        phone: {
          field: "phone",
          type: DataTypes.STRING,
        },
        password: {
          field: "password",
          type: DataTypes.STRING,
        },
        avatar: {
          field: "avatar",
          type: DataTypes.STRING,
        },
        address: {
          field: "address",
          type: DataTypes.STRING,
        },
      },
      {
        tableName: "users",
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
  
    // Relaciones acá
    Model.hasMany(models.Bikes, { foreignKey: 'id_user' });
    Model.hasMany(models.Carts, { foreignKey: 'id_user' });
  
    return Model;
  };