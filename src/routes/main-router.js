const { Router } = require("express");

const mainController = require("../controllers/main-controller");
const productController = require("../controllers/product-controller");
const userController = require("../controllers/user-controller");

const router = Router();

router.get("/", mainController.home);


module.exports = router;