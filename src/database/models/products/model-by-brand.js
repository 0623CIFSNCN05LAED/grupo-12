module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "ModelsByBrand",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(),
        primaryKey: true,
    },

      id_brand: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: "Brands",
          key: "id_brand",
        },
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
  Model.belongsTo(sequelize.models.Brands, { foreignKey: "id_brand" });
  Model.hasMany(sequelize.models.Bikes, { foreignKey: "id_model_name" });

  return Model;
};