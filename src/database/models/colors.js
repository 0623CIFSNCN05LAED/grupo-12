module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Colors",
        {
           
            name:{
                field: "color",
                type: DataTypes.STRING,
             },
              },
        { 
        tableName: "colors",
        createdAt: "created_at",
        UpdatedAt: "updated_at",
         });

//Relaciones acá

    return Model;
     };
