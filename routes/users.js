const express = require('express');
const router = express.Router();
const { body } = require('express-validator')
const userController = require('../controllers/userController')
const logDBMiddleware = require('../middelwares/logDBMiddelware');

let validacionCreateUsers = [
    body('name').notEmpty().withMessage('Debe completar este campo'),
    body('userName').notEmpty().withMessage('Debe completar este campo'),
    body('date').notEmpty().withMessage('Debe completar este campo'),
    body('password').notEmpty().withMessage('Debe completar este campo'),
    body('confirmPassword').notEmpty().withMessage('Debe completar este campo')    
];

router.get('/', (req, res) => {res.send('respond with a resource')});
router.get('/register', userController.register);
router.post('/register', validacionCreateUsers, logDBMiddleware, userController.create);
router.get('/login', userController.login);
router.post('/login', userController.logged);
router.get('/list', userController.list);

module.exports = router;
