const express = require("express");
const router = express.Router();
const apiUsersController = require("../../controllers/api/user-controller");

router.get("/api/users", apiUsersController.list);

module.exports = router;
