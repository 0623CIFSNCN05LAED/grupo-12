const db = require("../database/models"); 

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

    createBike: (product) => {
      db.products.create(product)
    },

    updateBikes: (id, product) => {
      db.products.update(id, product);
    },

    destroyProduct: (id) => {
      db.products.destroy(id);
    },

    getBikesForCategory: (categoria) =>{
      return db.products.filterCategory(categoria);
    }
     
} 

module.exports = productService;