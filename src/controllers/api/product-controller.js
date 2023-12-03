const productService = require("../../services/productServices");

module.exports = {
  list: async (req, res) => {
    try {
      const bikes = await productService.getAllBikes();
      const count = bikes.length;

      const bikesByCategory = bikes.reduce((acc, bike) => {
        const categoryName = bike.category ? bike.category.name : 'Sin Categoría'; // Si no hay categoría, usar 'Sin Categoría'
        
        if (!acc[categoryName]) {
            acc[categoryName] = { count: 0, bikes: [] };
        }

        acc[categoryName].count++;
  
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
            bike: bike.ModelsByBrand ? bike.ModelsByBrand.modelName : null,
            detailUrl: `/api/bike/${bike.id}`
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
}
};
