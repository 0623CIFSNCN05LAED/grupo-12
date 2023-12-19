const express = require("express");
const router = express.Router();
const apiProductController = require("../../controllers/api/product-controller");
// const upload = require('../middlewares/multer');

router.get("/api/products", apiProductController.list);
router.get("/api/bike/:id", apiProductController.detail) 
router.post('/products', apiProductController.createProduct);

module.exports = router;
