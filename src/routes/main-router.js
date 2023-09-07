const { Router } = require("express");

const productController = require("../controllers/product-controller");
const userController = require("../controllers/user-controller");
const mainController = require("../controllers/main-controller");

const router = Router();

router.get("/", mainController.home);
router.get("/login", userController.login);
router.get("/bikes", productController.productListBikes); 
router.get("/bikes/:id", productController.productDetailBikes);
router.get("/clothes", productController.productListClothes)
router.get("/clothes/:id", productController.productDetailClothes);
router.get("/accessories", productController.productListAccessories);
router.get("/accessories/:id", productController.productDetailAccessories);
router.get("/register", userController.register)
router.get("/product-cart", productController.productCart)

module.exports = router;