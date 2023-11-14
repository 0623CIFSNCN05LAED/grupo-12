module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Sizes",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: () => uuidv4(),
                primaryKey: true,
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
Model.hasMany(sequelize.models.Bikes, { foreignKey: 'id_size' });
    return Model;
     };
