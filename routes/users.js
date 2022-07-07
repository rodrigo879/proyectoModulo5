const express = require('express');
const multer = require('multer')
const path = require('path')
const { body } = require('express-validator')

const router = express.Router();

const userController = require('../controllers/userController')
const guestMiddelware = require('../middelwares/guestMiddelware');
const authMiddelware = require('../middelwares/authMiddelware');

let validacionCreateUsers = [
    body('name').notEmpty().withMessage('Debe completar el campo Name'),
    body('userName')
        .notEmpty().withMessage('Debe completar el campo User Name').bail()
        .isLength({min: 3}).withMessage('El nombre de usuario debe tener como minimo 3 caracteres'),
    body('password')
        .notEmpty().withMessage('Debes completar el campo contraseña').bail()
        .isLength({min: 8}).withMessage('La contraseña debe ser mayor a 8 caracteres'),
    body('passwordConfirm')
        .notEmpty().withMessage('Debes confirmar tu contraseña').bail()
        .isLength({min: 8}).withMessage('La confirmacion de contraseña debe ser mayor a 8 caracteres'),
    body('imageUser').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

        if(!file) {
            throw new Error('Se debe subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }
        return true;
    })
];

let validacionLoginUsers = [
    body('userName').notEmpty().withMessage('Debe completar este campo'),
    body('password').isLength({min: 8}).withMessage('La contraseña debe ser mayor a 8 caracteres')
]

// Para cargar las imagenes de usuarios, donde se van a cargar y con que nombre
const storage = multer.diskStorage({ 
    destination: (req,file,cb) => {
        cb(null, path.join(__dirname, '../public/images/imageUser'));
    },
    filename: (req,file,cb) => {
        let newFileName = 'user-' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
});
// Cargar la imagen
const upload = multer({ storage })

// Rutas del registro
router.get('/register', guestMiddelware, userController.create);
router.post('/register', upload.single('imageUser'), validacionCreateUsers, userController.store);

// Rutas del login
router.get('/login', guestMiddelware, userController.login);
router.post('/login', validacionLoginUsers, userController.logged);

// Ruta del listado de Usuarios
router.get('/list', authMiddelware, userController.list);

module.exports = router;
