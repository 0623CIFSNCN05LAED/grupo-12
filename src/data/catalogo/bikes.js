const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const productService = require("../../services/productServices");

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
      const product = this.getProducts().find((product) => product.id == id);
      return product;
    },

    create: function (product) {
      console.log(`Creating product ${product.modelo}`);
      
      // Determina el archivo JSON adecuado según el tipo de producto
      let productsFilePath;
      switch (product.tipo) {
        case 'bicicletas':
          productsFilePath = path.join(__dirname, "./bikes.json");
          break;
        case 'ropa':
          productsFilePath = path.join(__dirname, "./clothes.json");
          break;
        case 'accesorios':
          productsFilePath = path.join(__dirname, "./accessories.json");
          break;
        default:
          console.error('Tipo de producto no válido.');
          return; // Maneja el caso de un tipo de producto no válido
      }
    
      // Lee el contenido actual del archivo JSON
      const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    
      // Agrega el nuevo producto
      const newProduct = {
        id: uuidv4(),
        ...product,
      };
      products.push(newProduct);
    
      // Guarda el contenido actualizado en el archivo JSON
      fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
    }
} 
