const express = require('express');
const router = express.Router();
const userService = require('./services/userService'); 

// Ruta para crear un nuevo usuario
router.post('/users', async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Ruta para obtener un usuario por ID
router.get('/users/:id', async (req, res) => {
    try {
        const user = await userService.findUserById(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;