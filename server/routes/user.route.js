const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth");

router.post("/user", userController.createUser);
router.post("/user/login", userController.login);
router.get("/user/profile", authMiddleware, userController.getUserProfile);
router.get("/user/:id", userController.getUserById);
router.post("/google/user", userController.googleCreateUser);
router.post("/advertise/like", userController.likedHouse);

module.exports = router;
