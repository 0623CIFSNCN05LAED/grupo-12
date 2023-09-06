const { Router } = require("express");

const mainController = require("../controllers/main-controller");

const router = Router();

router.get("/", mainController.home);
router.get("/login", mainController.login);
router.get("/bikes", mainController.productListBikes); 
router.get("/bikes/:id", mainController.productDetailBikes);
router.get("/clothes", mainController.productListClothes)
router.get("/clothes/:id", mainController.productDetailClothes);
router.get("/accessories", mainController.productListAccessories);
router.get("/accessories/:id", mainController.productDetailAccessories);
router.get("/register", mainController.register)
router.get("/product-cart", mainController.productCart)

module.exports = router;