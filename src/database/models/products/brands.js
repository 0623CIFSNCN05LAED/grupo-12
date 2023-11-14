module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Brands",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: () => uuidv4(),
                primaryKey: true,
            },
                
            name:{
                field: "name",
                type: DataTypes.STRING,
             },
              },
        { 
        tableName: "brands",
        createdAt: "created_at",
        UpdatedAt: "updated_at",
         });

//Relaciones acá 
Model.hasMany(sequelize.models.Bikes, { foreignKey: 'id_brand' });
Model.hasMany(sequelize.models.ModelsByBrand, { foreignKey: "id_modelName" }); //es asi?

return Model;
     };
