const express = require("express");
const router = express.Router();
const apiProductController = require("../../controllers/api/product-controller");

router.get("/api/products", apiProductController.list);

module.exports = router;
