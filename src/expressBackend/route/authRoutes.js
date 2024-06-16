const express = require('express');
const router = express.Router();
const authController = require('../controllers/userController');
const workerController = require('../controllers/workerController');
const labourController = require('../controllers/labourController');

router.post('/register', authController.signUp);
router.post('/worker/register', workerController.signUp);
router.post('/user/login', authController.signIn);
router.post('/worker/login', workerController.signIn);
router.get('/users', authController.getAllUsers);
router.get('/workers', workerController.getAllWorkers);
router.get('/labour', labourController.getAllLabours);
module.exports = router; 