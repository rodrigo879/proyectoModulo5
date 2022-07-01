const express = require('express');
const router = express.Router();
const controller = require('../controllers/groupsController');
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({ 
    destination: (req,file,cb) => {
        cb(null, path.join(__dirname, '../public/images/img-group'));
    },
    filename: (req,file,cb) => {
        let newFileName = 'group-' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
});

const upload = multer({ storage })

// Todos los grupos
router.get('/', controller.index);

// Formulario de creación
router.get('/create', controller.create);

// Procesamiento del formulario de creación
router.post('/', upload.single('group-image') ,controller.store);

// Detalle de un grupo
router.get('/:id', controller.show);

module.exports = router;