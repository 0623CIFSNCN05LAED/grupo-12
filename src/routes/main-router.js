const { Router } = require("express");

const mainController = require("../controllers/main-controller");

const router = Router();

router.get("/", mainController.home);
router.get("/login", mainController.login);
router.get("/product-detail/bikes", mainController.productListBikes); 
router.get("/product-detail/bikes/:id?", mainController.productDetailBikes);
router.get("/product-detail/clothes", mainController.productListClothes)
router.get("/product-detail/clothes/:id?", mainController.productDetailClothes);
router.get("/product-detail/accessories", mainController.productListAccessories);
router.get("/product-detail/accessories/:id?", mainController.productDetailAccessories);

module.exports = router;