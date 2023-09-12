const { Router } = require("express");

const productController = require("../controllers/product-controller");

const router = Router();

router.get("/bikes", productController.productListBikes); 
router.get("/bikes/:id", productController.productDetailBikes);
router.get("/clothes", productController.productListClothes);
router.get("/clothes/:id", productController.productDetailClothes);
router.get("/accessories", productController.productListAccessories);
router.get("/accessories/:id", productController.productDetailAccessories);
router.get("/product-cart", productController.productCart); 

module.exports = router;