const { Router } = require("express");

const userController = require("../controllers/user-controller");

const router = Router();

router.get("/login", userController.login);
router.get("/register", userController.register); 

module.exports = router;