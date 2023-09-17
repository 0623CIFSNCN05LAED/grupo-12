const { Router } = require("express");

const productController = require("../controllers/product-controller");

const router = Router();

router.get("/bikes", productController.productListBikes); 
router.get("/bikes/:id", productController.productDetailBikes);

router.get("/cart", productController.productCart);

router.get("/create", productController.productCreate);
router.post("/", productController.productStoreBikes);

router.get("/edit", productController.productEdit);

module.exports = router;