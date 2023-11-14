module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "ModelsByBrand",
    {
      id_brand: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: "Brands",
          key: "id_brand",
        },
      },
      id_modelName: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      modelName: {
        type: DataTypes.STRING,
        required: true,
      },
    },
    {
      tableName: "models_by_brand",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  // Relaciones
  Model.belongsTo(Brands, { foreignKey: "id_brand" });
  Model.hasMany(Bikes, { foreignKey: "id_modelName" });

  return Model;
};