const { v4: uuidv4 } = require('uuid');

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
        type: DataTypes.UUID,
        allowNull: false,
      },
      modelName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "models_by_brand",
      timestamps: false,
    }
  );

  Model.associate = (db) => {
    Model.belongsTo(db.Brands, { 
      as: "brand",
      foreignKey: "id_brand"
    }); 

    Model.hasMany(db.Bikes, { 
      as: "bikes",
      foreignKey: "id_model_name"
    }); 
  };

  return Model;
};