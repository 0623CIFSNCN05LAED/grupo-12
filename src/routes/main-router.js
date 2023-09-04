const { Router } = require("express");

const mainController = require("../controllers/main-controller");

const router = Router();

router.get("/", mainController.home);
router.get("/login", mainController.login);
router.get("/product-detail/:id?", mainController.productDetail)

module.exports = router;