const { Router } = require("express");
const mainController = require("../controllers/main-controller"); 

const router = Router();

router.get("/", mainController.home);

router.get("/search", mainController.search); // no funciona, VER

module.exports = router;