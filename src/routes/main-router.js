const { Router } = require("express");

const mainController = require("../controllers/main-controller");

const router = Router();

router.get("/", mainController.home);

const productsRouter = require("./products-router");
router.use("/products-router", productsRouter);


module.exports = router;