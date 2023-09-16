const db = require("../data/db"); 
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");


const productService = {
    createProduct: (product) => {
        db.products.create(product);
      },
      getBikes: function () {
        const productsFilePath = path.join(__dirname, "../data/catalogo/bikes.json");
        const bikes = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        return bikes;
        
      },
    getClothes: function () {
        const productsFilePath = path.join(__dirname, "../data/catalogo/clothes.json");
        const clothes = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        return clothes;
      },
    getAccessories: function () {
        const productsFilePath = path.join(__dirname, "../data/catalogo/accessories.json");
        const accessiores = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        return accessiores;
    }, 
     saveBikes : (bikes) => {
      const bikesFilePath = path.join(__dirname, "../data/catalogo/bikes.json");
      fs.writeFileSync(bikesFilePath, JSON.stringify(bikes, null, 2));
    },
    
     saveAccessories : (accessories) => {
      const accessoriesFilePath = path.join(__dirname, "../data/catalogo/accessories.json");
      fs.writeFileSync(accessoriesFilePath, JSON.stringify(accessories, null, 2));
    },
    
    saveClothes : (clothes) => {
      const clothesFilePath = path.join(__dirname, "../data/catalogo/clothes.json");
      fs.writeFileSync(clothesFilePath, JSON.stringify(clothes, null, 2));
    }, 

    findAll: function () {
      return this.getProducts();
    }, 

    findById: function (id) {
      const product = this.getProducts().find((product) => product.id == id);
      return product;
    },

    create: function (product) {
      
      // Determina el archivo JSON adecuado según el tipo de producto
      let productsFilePath;
      let newProduct;
      switch (product.tipo) {
        case 'bicicletas':
          productsFilePath = path.join(__dirname, "../data/catalogo/bikes.json");
          newProduct = {
            id: uuidv4(),
            ...product,
          };
          products.push(newProduct);
          this.saveBikes(products);
          break;
        case 'ropa':
          productsFilePath = path.join(__dirname, "../data/catalogo/clothes.json");
          newProduct = {
            id: uuidv4(),
            ...product,
          };
          products.push(newProduct);
          this.saveClothes(products);
          break;
        case 'accesorios':
          productsFilePath = path.join(__dirname, "../data/catalogo/accessories.json");
          newProduct = {
            id: uuidv4(),
            ...product,
          };
          products.push(newProduct);
          this.saveAccessories(products);
          break;
        default:
          console.error('Tipo de producto no válido.');
          return; // Maneja el caso de un tipo de producto no válido
      }
    
      // Lee el contenido actual del archivo JSON
      const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

    
      // Guarda el contenido actualizado en el archivo JSON
      fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
    }
} 

module.exports = productService;