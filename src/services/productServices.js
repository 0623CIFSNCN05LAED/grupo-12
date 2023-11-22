const {  Bikes, Sizes, Colors, Brands, Categories, ModelsByBrand  } = require("../database/models"); 
const Sequelize = require("sequelize");


const productService = {

    getAllBikes: () => {
        return Bikes.findAll({
          include: [
          {
            model: ModelsByBrand,
            attributes: ['modelName'], // Incluye solo la propiedad 'modelName'
            as: 'ModelsByBrand', // Alias para la relación
          },
        ],
        });
    },

    getBike: (id) => {
      return Bikes.findByPk(id, {
        include: [{
          model: ModelsByBrand,
          attributes: ['modelName'], // Incluye solo la propiedad 'modelName'
          as: 'ModelsByBrand', // Alias para la relación
        },"brand", "category", "color", "size",  ],
      }).then((bike) => { 
        if (!bike) {
          return null; // Manejar el caso en que no se encuentra la bicicleta
        }
    
        return {
          id: bike.id, 
          ModelsByBrand: bike.ModelsByBrand ? {name: bike.ModelsByBrand.modelName} : null,  
          brand: bike.brand ? { id: bike.brand.id, name: bike.brand.name } : null,
          category: bike.category ? { id: bike.category.id, name: bike.category.name } : null,
          color: bike.color ? { id: bike.color.id, name: bike.color.name } : null,
          size: bike.size ? { id: bike.size.id, name: bike.size.name } : null,
          description: bike.description,
          price: bike.price,
          image: bike.image.filename,
        };
      });
    },
    
      createBike: async (bike, image) => { 
        try {

        const brand = await Brands.findByPk(bike.brand);
      
          // Asegúrate de que brand tenga un valor y brand.id sea accesible
          if (!brand || !brand.id) {
            console.log("La marca no fue encontrada o no tiene un ID válido.");
            return null;  // O maneja de otra manera la falta de marca
          }

          console.log("Datos de la bicicleta antes de crear:", bike);
          
      
          const [modelName, createdModel] = await ModelsByBrand.findOrCreate({
            where: { modelName: bike.modelName }, 
            defaults: { id_brand: brand.id },
          });
      
          const category = await Categories.findByPk(bike.category);

          // Asegúrate de que category tenga un valor y category.id sea accesible
          if (!category || !category.id) {
            console.log("La categoría no fue encontrada o no tiene un ID válido.");
            return null;  // O maneja de otra manera la falta de categoría
          }
      
          const size = await Sizes.findByPk(bike.size);

          if (!size || !size.id){
            console.log("El size no fue encontrado o no tiene un ID válido.");
            return null; 
          }
      
          const color = await Colors.findByPk(bike.color);
          if (!color || !color.id){
            console.log("El color no fue encontrado o no tiene un ID válido.");
            return null; 
          }
      
          const newBike = await Bikes.create({
            id_model_name: modelName.id,
            id_category: category.id,
            id_size: size.id,
            id_brand: brand.id,
            id_color: color.id,
            description: bike.description,
            price: bike.price,
            image: image.filename,
          });
      
          return newBike;
        } catch (error) {
          console.error("Error al crear la bicicleta:", error);
          return null;  // O maneja de otra manera el error
        }
      },

      updateBikes: async (id, body, file) => { 

              const bike = await Bikes.findByPk(id, {
                  include: [
                      { model: ModelsByBrand, as: 'ModelsByBrand' },
                      { model: Brands, as: 'brand' },
                      { model: Categories, as: 'category' },
                      { model: Colors, as: 'color' },
                      { model: Sizes, as: 'size' },
                  ],
              });
      
              if (!bike) {
                  throw new Error('Bicicleta no encontrada');
              }
      
              // Actualizar o crear el modelo
              let model;
      
              // Verificar si el modelo existe en el cuerpo de la solicitud
              if (body.modelName) {
                  model = await ModelsByBrand.findOne({ where: { modelName: body.modelName } });
      
                  if (!model) {
                      // Si no existe, actualizar el modelo actual con el nuevo nombre (si existe)
                      if (bike.ModelsByBrand) {
                          bike.ModelsByBrand.modelName = body.modelName;
                          await bike.ModelsByBrand.save();
                      }
                  }
              }
      
              // Actualizar otros campos relacionados
              if (model) {
                  bike.id_model_name = model.id;
              }
      
              // Verificar y actualizar las otras relaciones
              if (body.brand) {
                  const brand = await Brands.findOne({ where: { name: body.brand } });
                  if (brand) {
                      bike.id_brand = brand.id;
                  }
              }
      
              if (body.size) {
                  const size = await Sizes.findOne({ where: { name: body.size } });
                  if (size) {
                      bike.id_size = size.id;
                  }
              }
      
              if (body.color) {
                  const color = await Colors.findOne({ where: { name: body.color } });
                  if (color) {
                      bike.id_color = color.id;
                  }
              }
      
              if (body.category) {
                  const category = await Categories.findOne({ where: { name: body.category } });
                  if (category) {
                      bike.id_category = category.id;
                  }
              }
      
              bike.description = body.description;
              bike.price = body.price;
      
              // Si se proporciona una nueva imagen, actualizarla
              if (file) {
                  bike.image = file.filename;
              }
      
              // Guardar los cambios en la base de datos
              await bike.save();
      
              return bike; // Devolver la bicicleta actualizada
          
          },

    destroyProduct: async (id) => {
      
      await Bikes.destroy({where: {id : id}} )

      return;
   
  },


    // destroyProduct: (id) => {
    //   const bikeCategories = Bikes.findByPk(id, {
    //     include: ["category"],
    //   }).then((bike) => {
    //     return bike.category.map((category) => {
    //       return category.removeBike(bike);
    //     });
    //   });
    
    //   return Promise.all([bikeCategories]).then(() => {
    //     return Bikes.destroy({
    //       where: { id: id },
    //     });
    //   });
    // },

    getBikesForCategory: (categoria) =>{
      return db.products.filterCategory(categoria);
    },

    getAllCategories: () => {
      return Categories.findAll();
    }, 

    getAllSizes: () => {
      return Sizes.findAll();
    }, 

    getAllBrands: () => {
      return Brands.findAll();
    }, 

    getAllColors: () => {
      return Colors.findAll();
    }, 

    getAllModels: () => {
      return ModelsByBrand.findAll();
    },
     
} 

module.exports = productService;