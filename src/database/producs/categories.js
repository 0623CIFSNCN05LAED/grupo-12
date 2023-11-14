module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Categories",
        {
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
Model.belongsTo(models.Categories, { foreignKey: 'id_category' });
    return Model;
     };
