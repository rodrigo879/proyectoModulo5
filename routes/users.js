const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/', (req, res) => {
    res.send('respond with a resource');
});

router.get('/registro', userController.registro)

router.get('/logearse', userController.logearse)

router.get('/list', userController.list)

module.exports = router;
