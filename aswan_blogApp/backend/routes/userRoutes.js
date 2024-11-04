const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const User = require('../models/User'); // Ensure the User model matches the 'users' table

router.post('/register', userController.registerUser);

router.get('/user/:id', userController.getUser);

router.put('/user/:id', userController.updateUser);

router.delete('/user/:id', userController.deleteUser);

module.exports = router;