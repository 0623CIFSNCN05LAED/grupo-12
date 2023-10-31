module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Categories",
        {
            id:{
                field: "id",
                type: DataTypes.INTEGER,
                },
            name:{
                field: "category",
                type: DataTypes.STRING,
             },
              },
        { 
        tableName: "categories",
        createdAt: "created_at",
        UpdatedAt: "updated_at",
         });

//Relaciones acá

    return Model;
     };
