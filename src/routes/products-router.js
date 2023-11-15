const express = require("express");
const upload = require('../middlewares/multer');
const productsRouter = express.Router();
const userGuard = require("../middlewares/user-guard");

const productController = require("../controllers/product-controller");



productsRouter.get("/bikes", productController.productListBikes); 
productsRouter.get("/bikes/:id", productController.productDetailBikes);

productsRouter.get("/bikes/category/:categoria", productController.filterCategory)
productsRouter.get("/bikes/id:", productController.filterCategory)

productsRouter.get("/cart",userGuard, productController.productCart);

productsRouter.get("/create", productController.productCreate);
productsRouter.post("/bikes", upload.single("image"), productController.productStoreBikes);

productsRouter.get("/edit/:id", productController.productEdit);
productsRouter.put("/bikes/:id", upload.single("image"), productController.update);

productsRouter.delete("/bikes/:id", productController.destroy)

module.exports = productsRouter;