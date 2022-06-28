const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/', (req, res) => {
    res.send('respond with a resource');
});

router.get('/register', userController.register);

router.post('/register', userController.create);

router.get('/login', userController.login);

router.get('/list', userController.list);

module.exports = router;
