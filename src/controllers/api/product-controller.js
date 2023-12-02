const productService = require("../../services/productServices");

module.exports = {
  list: async (req, res) => {
    try {
      const bikes = await productService.getAllBikes();
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
            category: bike.id_category,
            brand:bike.id_brand,
            size:bike.id_size,
            color: bike.id_color,
            price: bike.price
            
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