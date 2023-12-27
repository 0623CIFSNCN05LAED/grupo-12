const express = require("express");
const upload = require('../middlewares/multer');
const productsRouter = express.Router();
const userGuard = require("../middlewares/user-guard");
const validateForm = require("../middlewares/validate-form")
const createEditValidation = require("../validaciones/create-edit-product")

const productController = require("../controllers/product-controller");
const { validate } = require("uuid");



productsRouter.get("/bikes", productController.productListBikes); 
productsRouter.get("/bikes/:id", productController.productDetailBikes);

productsRouter.get("/search", productController.search); 

productsRouter.get("/bikes/category/:category", productController.filterCategory);
productsRouter.get("/bikes/id:", productController.filterCategory);

productsRouter.get("/cart", userGuard, productController.productCart);

productsRouter.get("/create", productController.productCreate);
productsRouter.post("/bikes", upload.single("image"), createEditValidation, validateForm("/create"), productController.productStoreBikes);

productsRouter.get("/edit/:id", productController.productEdit);
productsRouter.put("/bikes/:id", upload.single("image"),createEditValidation, validateForm("/edit/:id"), productController.update);

productsRouter.delete("/bikes/delete/:id", productController.destroy) 




module.exports = productsRouter;