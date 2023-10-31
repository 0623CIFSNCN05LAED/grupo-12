module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Bikes",
        {
            id:{
                field: "id",
                type: DataTypes.INTEGER,
                },
            name:{
                field: "name",
                type: DataTypes.STRING,
            },
            id_category:{
                field: "id_categoria",
                type: DataTypes.STRING,
            },
            id_size:{
                field: "id_size",
                type: DataTypes.STRING,
            },
            id_brand:{
                field: "id_brand",
                type: DataTypes.STRING,
            },
            id_color:{
                field: "id_color",
                type: DataTypes.STRING,
            },
            description:{
                field: "description",
                type: DataTypes.STRING,
            },
            price:{
                field: "price",
                type: DataTypes.DECIMAL,
            },
        },
        { 
        tableName: "bikes",
        createdAt: "created_at",
        UpdatedAt: "updated_at",
         });

//Relaciones acá

    return Model;
     };

