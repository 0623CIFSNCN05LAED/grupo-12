const db = require("../data/db"); 

const productService = {
    createProduct: (product) => {
        db.products.create(product);
      }
} 

module.exports = productService;