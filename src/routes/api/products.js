const express = require("express");
const router = express.Router();
const apiProductController = require("../../controllers/api/product-controller");

router.get("/api/products", apiProductController.list);
router.get("/api/bike/:id", apiProductController.detail)

module.exports = router;
