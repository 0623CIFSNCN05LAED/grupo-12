const db = require("../data/db"); 

const productService = {
    createProduct: (product) => {
        db.products.create(product);
      },
    getAllBikes: function () {
        return db.products.findAll();
      },

    getBike: (id) => {
      return db.products.findById(id);
    },  

    getBikeForID: function(id){
      const bike = db.products.findById(id);
      return bike;
    },

    createBike: (product) => {
      db.products.create(product)
    },

    updateBikes: (id, product) => {
      db.products.update(id, product);
    },

    destroyProduct: (id) => {
      db.products.destroy(id);
    }
     
} 

module.exports = productService;