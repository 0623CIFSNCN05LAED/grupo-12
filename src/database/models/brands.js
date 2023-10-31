module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Brands",
        {
            id:{
                field: "id",
                type: DataTypes.INTEGER,
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

    return Model;
     };
