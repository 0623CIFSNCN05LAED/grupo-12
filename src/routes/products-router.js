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

router.get("/cart", productController.productCart);

router.get("/create", productController.productCreate);
router.post("/", upload.single("img"), productController.productStoreBikes);

router.post("/", productController.productStoreBikes);

router.get("/edit/:id", productController.productEdit);
router.put("/:id", upload.single("img"), productController.productEdit);

router.delete("/:id", productController.destroy)

module.exports = router;