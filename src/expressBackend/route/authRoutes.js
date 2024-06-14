const express = require('express');
const router = express.Router();
const authController = require('../controllers/userController');
const workerController = require('../controllers/workerController');

router.post('/user/register', authController.signUp);
router.post('/worker/register', workerController.signUp);
router.post('/user/login', authController.signIn);
router.post('/worker/login', workerController.signIn);
module.exports = router; 