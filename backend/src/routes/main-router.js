const { Router } = require("express");
const mainController = require("../controllers/main-controller"); 

const router = Router();

router.get("/", mainController.home);

module.exports = router;