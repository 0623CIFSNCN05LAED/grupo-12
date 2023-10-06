const express = require("express");
const path = require('path');
const multer = require('multer');
const productsRouter = express.Router();

const storage = multer.diskStorage({
 destination: path.join(__dirname, '../../public/images/products'),
 filename: function(req, file, cb){
    cb(
        null, 
        file.fieldname + '-' + Date.now() + path.extname(file.originalname) 
    );
 }

});

const upload = multer({
    storage : storage  
})


const productController = require("../controllers/product-controller");



productsRouter.get("/bikes", productController.productListBikes); 
productsRouter.get("/bikes/:id", productController.productDetailBikes);

productsRouter.get("/bikes/category/:categoria", productController.filterCategory)
productsRouter.get("/bikes/id:", productController.filterCategory)

productsRouter.get("/cart", productController.productCart);

productsRouter.get("/create", productController.productCreate);
productsRouter.post("/bikes", upload.single("img"), productController.productStoreBikes);

productsRouter.get("/edit/:id", productController.productEdit);
productsRouter.put("/bikes/:id", upload.single("img"), productController.update);

productsRouter.delete("/bikes/:id", productController.destroy)

module.exports = productsRouter;