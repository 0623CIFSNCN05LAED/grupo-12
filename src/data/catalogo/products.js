const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

module.exports = {
    getBikes: function () {
        const productsFilePath = path.join(__dirname, "./bikes.json");
        const bikes = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        return bikes;
        
      },
    getClothes: function () {
        const productsFilePath = path.join(__dirname, "./clothes.json");
        const clothes = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        return clothes;
      },
    getAccessories: function () {
        const productsFilePath = path.join(__dirname, "./accessories.json");
        const accessiores = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        return accessiores;
    }, 
     saveBikes : (bikes) => {
      const bikesFilePath = path.join(__dirname, "./catalogo/bikes.json");
      fs.writeFileSync(bikesFilePath, JSON.stringify(bikes, null, 2));
    },
    
     saveAccessories : (accessories) => {
      const accessoriesFilePath = path.join(__dirname, "./accessories.json");
      fs.writeFileSync(accessoriesFilePath, JSON.stringify(accessories, null, 2));
    },
    
    saveClothes : (clothes) => {
      const clothesFilePath = path.join(__dirname, "./clothes.json");
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
    console.log(`Creating product ${product.name}`);
    const products = this.getBikes();
    const newProduct = {
      id: uuidv4(),
      ...product,
    };
    products.push(newProduct);
    this.saveProducts(products);
  },
} 

