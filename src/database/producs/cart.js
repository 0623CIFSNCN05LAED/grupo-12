module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      "Carts",
      {
        id: {
          field: "id",
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        id_user: {
          field: "id_user",
          type: DataTypes.INTEGER,
          foreignKey: {
            references: {
              table: "users",
              field: "id",
            },
          },
        },
        bikes: {
          type: DataTypes.ARRAY(DataTypes.INTEGER),
        },
      },
      {
        tableName: "carts",
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
  
    return Model;
  };