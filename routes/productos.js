const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

router.get('/', productosController.listado)
router.get('/:idProducto', productosController.detalle);
router.get('/:idProducto/comentarios/:idComentario?', productosController.detalleComentario);

module.exports = router;