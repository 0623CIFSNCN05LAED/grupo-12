const db = require("../data/db"); 

const productService = {
    createProduct: (product) => {
        db.products.create(product);
      },
    getAllBikes: function () {
        return db.products.findAll();
      },

    getBikeForID:function(id){
      const bike = db.products.findById(id);
      return bike;
    },

    createBike: (product) => {
      db.products.create(product)
    }
} 

module.exports = productService;