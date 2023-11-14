module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Bikes",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: () => uuidv4(),
                primaryKey: true,
            },
            modelName:{
                field: "modelName",
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
            image:{
                field: "image",
                type: DataTypes.STRING
            }
        },
        { 
        tableName: "bikes",
        createdAt: "created_at",
        UpdatedAt: "updated_at",
         });

//Relaciones acá
Model.belongsTo(sequelize.models.Brands, { foreignKey: 'id_brand' });
Model.belongsTo(sequelize.models.Sizes, { foreignKey: 'id_size' });
Model.belongsTo(sequelize.models.Colors, { foreignKey: 'id_color' });
Model.belongsTo(sequelize.models.Categories, { foreignKey: 'id_category' });

    return Model;
     };

