const {  Bikes, Sizes, Colors, Brands, Categories, ModelsByBrand  } = require("../database/models"); 
const Sequelize = require("sequelize");


const productService = {

    getAllBikes: () => {
        return Bikes.findAll();
    },

    getBike: (id) => {
      return Bikes.findByPk(id, {
        include: ["brand", "category", "color", "size"],
      }).then((bike)=> {
        return {
          id: bike.id, 
          brand: bike.brand.map((brand)=> {
            return {
              id: brand.id, 
              name: brand.name
            };
          }), 
          category: bike.category.map((category)=>{
            return {
              id: category.id, 
              name: category.name
            }
          }),
          color: bike.color.map((color)=>{
            return {
              id: color.id,
              name: color.name
            }
          }),
          size: bike.size.map((size)=>{
            return {
              id: size.id, 
              name: size.name
            }
          }), 
          description: bike.description,
          price: bike.price, 
          image: bike.image
        }
      })
        
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

    createBike: async (bike, image) => { // usar solo los find
     
      const [modelName, createdModel] = await ModelsByBrand.findOrCreate({
        where: { modelName: bike.modelName }
      });

    
      // const model = await ModelsByBrand.findOne({
      //   where: {
      //     modelName: bike.modelName,
      //     id_brand: brand.id,
      //   }})

      const category = await Categories.findOne({
        where: {
          category: bike.category,
          id_category: category.id,
        }})

        const size = await Sizes.findOne({
          where: {
            size: bike.size,
            id_size: size.id,
          }})

        const brand = await Brands.findOne({
            where: {
              brand: bike.brand,
              id_category: category.id,
            }})    
  
        const color = await Colors.findOne({
            where: {
              color: bike.color,
              id_color: color.id,
            }})
      
      const newBike = await Bikes.create({
        id_model_name: bike.modelName,
        id_category: bikeCategory.id, 
        id_size: bikeSize.id, 
        id_brand: brand.id,
        id_color: bikeColor.id, 
        description: description,
        price: price,
        image: image,
      });
      newBike.set(modelName || createdModel)
      newBike.set(category)
      newBike.set(size)
      newBike.set(brand)
      newBike.set(color)

      return newBike;
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