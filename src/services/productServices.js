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
          ModelsByBrand: bike.ModelsByBrand
        ? {name: bike.ModelsByBrand.modelName} 
        : null,  
          brand: bike.brand
        ? { id: bike.brand.id, name: bike.brand.name }
        : null,
          category: bike.category
        ? { id: bike.category.id, name: bike.category.name }
        : null,
          color: bike.color
        ? { id: bike.color.id, name: bike.color.name }
        : null,
          size: bike.size
        ? { id: bike.size.id, name: bike.size.name }
        : null,
          description: bike.description,
          price: bike.price,
          image: bike.image,
        };
      });
    },
    
    // createBike: async (body, file) => {
      
    //     // Crear la marca si no existe
    //     let brand = await Brands.findOne({ where: { name: body.name } });
    //     if (!brand) {
    //       brand = await Brands.create({ name: body.name });
    //     }
  
    //     // Crear el modelo si no existe
    //     let model = await ModelsByBrand.findOne({ where: { modelName: body.modelName } });
    //     if (!model) {
    //       model = await ModelsByBrand.create({ modelName: body.modelName });
    //     }
  
    //     // Crear la categoría si no existe
    //     let category = await Categories.findOne({ where: { category: body.category } });
    //     if (!category) {
    //       category = await Categories.create({ category: body.category });
    //     }
  
    //     // Crear el tamaño si no existe
    //     let size = await Sizes.findOne({ where: { size: body.size } });
    //     if (!size) {
    //       size = await Sizes.create({ size: body.size });
    //     }
  
    //     // Crear el color si no existe
    //     let color = await Colors.findOne({ where: { color: body.color } });
    //     if (!color) {
    //       color = await Colors.create({ color: body.color });
    //     }
  
    //     // Crear la bicicleta con los datos del formulario
    //     const newBike = await Bikes.create({
    //       id_model_name: model.id,
    //       id_category: category.id,
    //       id_size: size.id,
    //       id_brand: brand.id,
    //       id_color: color.id,
    //       description: body.description,
    //       price: body.price,
    //       image: file.filename,
    //     });
  
    //     return newBike;
    //   },
    
    // const model = await ModelsByBrand.findOne({
      //   where: {
      //     modelName: bike.modelName,
      //     id_brand: brand.id,
      //   }})

      createBike: async (bike, image) => { 
        try {

        const brand = await Brands.findByPk(bike.brand);
        //   const brand = await Brands.findOne({
        //     where: { name: bike.brand },
        // });
      
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
            image: image,
          });
      
          return newBike;
        } catch (error) {
          console.error("Error al crear la bicicleta:", error);
          return null;  // O maneja de otra manera el error
        }
      },

    updateBikes: (id, body, file) => {
      return Bikes.update(
        {
        modelName: body.model_name,
        id_category: body.id_category,
        id_size: body.id_size, 
        id_brand: body.id_brand,
        id_color: body.id_color,
        description: body.description,
        price: body.price,
        image: file ? file.filename : undefined
        }, 
        {
          where: { id: id},
        }
      );
    },

    destroyProduct: (id) => {
      const bikeCategories = Bikes.findByPk(id, {
        include: ["category"],
      }).then((bike) => {
        return bike.category.map((category) => {
          return category.removeBike(bike);
        });
      });
    
      return Promise.all([bikeCategories]).then(() => {
        return Bikes.destroy({
          where: { id: id },
        });
      });
    },

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