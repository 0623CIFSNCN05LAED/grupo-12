module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Sizes",
        {
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
Model.belongsTo(models.Sizes, { foreignKey: 'id_size' });
    return Model;
     };
