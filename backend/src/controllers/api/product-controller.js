const productService = require("../../services/productServices");

module.exports = {
  list: async (req, res) => {
    try {
      const bikes = await productService.getAllBikes();
      const count = bikes.length; 

      const categories = await productService.getAllCategories(); 

      const colors = await productService.getAllColors(); 

      const brands = await productService.getAllBrands(); 

      const sizes = await productService.getAllSizes();

      const bikesByCategory = bikes.reduce((acc, bike) => {
        const categoryName = bike.category ? bike.category.name : 'Sin Categoría'; // Si no hay categoría, usar 'Sin Categoría'
        
        if (!acc[categoryName]) {
            acc[categoryName] = { count: 0, bikes: [] };
        }

        acc[categoryName].count++;
        acc[categoryName].bikes.push({
          id: bike.id,
          description: bike.description,
          category: bike.category ? bike.category.name : null,
          brand: bike.brand ? bike.brand.name : null,
          size: bike.size ? bike.size.name : null,
          color: bike.color ? bike.color.name : null,
          price: bike.price,
          image: bike.image,
          name: bike.ModelsByBrand ? bike.ModelsByBrand.modelName : null,
          detailUrl: `/api/bike/${bike.id}`,
        });
  
        return acc;
    }, {}); 
    
     
       const response = {
        meta: {
          status: 200,
          url: req.originalUrl,
        },
        data: {
          count,
          countByCategory: bikesByCategory,
          bikes
          : bikes.map((bike) => ({
            id: bike.id,
            description: bike.description,
            category: bike.category ? bike.category.name : null, // Accede al nombre de la categoría si está presente
            brand: bike.brand ? bike.brand.name : null, // Accede al nombre de la marca si está presente
            size: bike.size ? bike.size.name : null, // Accede al nombre del tamaño si está presente
            color: bike.color ? bike.color.name : null, // Accede al nombre del color si está presente
            price: bike.price,
            image: bike.image,
            name: bike.ModelsByBrand ? bike.ModelsByBrand.modelName : null,
            detailUrl: `/api/bike/${bike.id}`
          })), 
          categories: categories.map((category) => ({
            id: category.id,
            name: category.name,
          })), 
          colors: colors.map((color) => ({
            id: color.id, 
            name: color.name,
          })), 
          brands: brands.map((brand) => ({
            id: brand.id, 
            name: brand.name,
          })), 
          sizes: sizes.map((size) => ({
            id: size.id, 
            name: size.name,
          })),

        },
      };

      res.json(response);
    } catch (error) {
      console.error("Error fetching bikes:", error);
      res.status(500).json({
        meta: {
          status: 500,
          error: "Internal Server Error",
        },
        data: null,
      });
    }
  },

  detail: async (req,res) => {
    const bike = await productService.getBike(req.params.id);
    
    const response = {
        meta:{
            status: 200,
            url: "/api/bike/:id"
        },
        data: bike,
        }
    res.json(response)
}, 

createProduct : async (req, res) => {
  try {
    // Extraer datos del cuerpo de la solicitud
    const { description, category, brand, size, color, price, modelName } = req.body;
    const imageFilename = req.file.filename;

    // Lógica para crear un nuevo producto usando productService
    const newProduct = await productService.createBike({
      description,
      category,
      brand,
      size,
      color,
      price,
      image,
      modelName,
      imageFilename
    }, 
    
    );

    res.status(201).json({
      meta: {
        status: 201,
        message: 'Producto creado con éxito',
        url: `/api/products/${newProduct.id}`,
      },
      data: newProduct,
    });
  } catch (error) {
    console.error('Error al crear el producto:', error);
    res.status(500).json({
      meta: {
        status: 500,
        error: 'Error interno del servidor',
      },
      data: null,
    });
  }
}

};
