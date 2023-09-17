const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

module.exports = {
    getBikes: function () {
        const productsFilePath = path.join(__dirname, "./bikes.json");
        const bikes = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        return bikes;
      },
    
    saveBikes : (bikes) => {
      const bikesFilePath = path.join(__dirname, "./bikes.json");
      fs.writeFileSync(bikesFilePath, JSON.stringify(bikes, null, 2));
    }, 

    findAll: function () {
      return this.getBikes();
    }, 

    findById: function (id) {
      const product = this.getBikes().find((product) => product.id == id);
      return product;
    },

    create: function (product) {
      console.log(`Creating product ${product.nombre}`);
      const products = this.getBikes();
      const newProduct = {
        id: uuidv4(),
        ...product,
      };
      products.push(newProduct);
      this.saveBikes(products);
      
    }
} 
