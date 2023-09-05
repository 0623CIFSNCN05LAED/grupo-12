const catalogo= require("../data/catalogo");

const bikes= catalogo.bikes;
const clothes= catalogo.clothes;
const accessories= catalogo.accessories;

module.exports = {
  home: (req, res) => {
    res.render("home");
  },

  login: (req, res) => {
    res.render("login");
  },

  productDetailBikes: (req, res) =>{
    const id = req.params.id;
    const bike= bikes.find((bike) => bike.id == id);
    res.render("product-detail-bikes", {'bike' : bike});
  },

  productDetailClothes: (req, res) =>{
    const id = req.params.id;
    const cloth= clothes.find((cloth) => cloth.id == id);
    res.render("product-detail-clothes", {'cloth' : cloth});
  },

  productDetailAccessories: (req, res) =>{
    const id = req.params.id;
    const accessory= accessories.find((accessory) => accessory.id == id);
    res.render("product-detail-accessories", {'accessory' : accessory});
  }

};