const express = require('express');
const router = express.Router();
const { getProductos, getProductoById, createProducto, updateProducto, partialUpdateProducto, deleteProducto } = require('../controllers/productoController');
const auth = require('../middleware/auth');

router.get('/', auth, getProductos);
router.get('/:id', auth, getProductoById);
router.post('/', auth, createProducto);
router.put('/:id', auth, updateProducto);
router.delete('/:id', auth, deleteProducto);
router.patch('/:id', auth, partialUpdateProducto);

module.exports = router;
