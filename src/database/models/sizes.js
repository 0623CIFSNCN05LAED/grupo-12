module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Sizes",
        {
            id:{
                field: "id",
                type: DataTypes.INTEGER,
                },
            name:{
                field: "size",
                type: DataTypes.STRING,
             },
              },
        { 
        tableName: "sizes",
        createdAt: "created_at",
        UpdatedAt: "updated_at",
         });

//Relaciones acá

    return Model;
     };
