const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth');

router.post('/user', userController.createUser);
router.post('/user/login', userController.login);
router.get('/user/profile', authMiddleware, userController.getUserProfile);

module.exports = router;
