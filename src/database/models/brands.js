module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Brands",
        {
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

    return Model;
     };
