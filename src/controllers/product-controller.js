const bikes= require("../data/catalogo/bikes");
const clothes = require ("../data/catalogo/clothes")
const accessories = require ("../data/catalogo/accessories")

module.exports={

    productCart: (req, res) => {
        res.render("product-cart");
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
      },
    
      productListBikes: (req, res) =>{
        const id= req.params.id;
        res.render("product-list-bikes", {bycicles : bikes } );
      },
    
      productListClothes: (req, res) =>{
        const id= req.params.id;
        res.render("product-list-clothes" , {clothing : clothes } );
      },
    
      productListAccessories: (req, res) =>{
        const id= req.params.id;
        res.render("product-list-accessories", {accessories : accessories } );
      },

      productCreate: (req, res) =>{
        res.render("product-create-form")
      }

}