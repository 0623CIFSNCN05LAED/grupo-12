module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Categories",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: () => uuidv4(),
                primaryKey: true,
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
Model.hasMany(sequelize.models.Bikes, { foreignKey: 'id_category' });
    return Model;
     };
