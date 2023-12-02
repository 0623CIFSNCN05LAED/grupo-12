const productService = require("../../services/productServices");

module.exports = {
  list: async (req, res) => {
    try {
      const bikes = await productService.getAllBikes();
      console.log("Bicicletas antes del mapeo:", bikes);
      const count = bikes.length;

      const response = {
        meta: {
          status: 200,
          url: req.originalUrl,
        },
        data: {
          count,
          bikes: bikes.map((bike) => ({
            id: bike.id,
            description: bike.description,
            category: bike.category ? bike.category.name : null, // Accede al nombre de la categoría si está presente
            brand: bike.brand ? bike.brand.name : null, // Accede al nombre de la marca si está presente
            size: bike.size ? bike.size.name : null, // Accede al nombre del tamaño si está presente
            color: bike.color ? bike.color.color : null, // Accede al nombre del color si está presente
            price: bike.price,
            
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
};