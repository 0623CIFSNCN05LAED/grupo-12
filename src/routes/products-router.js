const { Router } = require("express");
const path = require('path');
const multer = require('multer');

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

const router = Router();

router.get("/bikes", productController.productListBikes); 
router.get("/bikes/:id", productController.productDetailBikes);

router.get("/bikes/category/:categoria", productController.filterCategory)
router.get("/bikes/id:", productController.filterCategory)

router.get("/cart", productController.productCart);

router.get("/create", productController.productCreate);
router.post("/bikes", upload.single("img"), productController.productStoreBikes);

router.get("/edit/:id", productController.productEdit);
router.put("/bikes/:id", upload.single("img"), productController.update);

router.delete("/bikes/:id", productController.destroy)

module.exports = router;