const express = require('express');
const router = express.Router();
const authController = require('../controllers/userController');
const workerController = require('../controllers/workerController');

router.post('/register', authController.signUp);
router.post('/wRegister', workerController.signUp);
module.exports = router; 