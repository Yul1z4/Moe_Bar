const express = require('express');
const router = express.Router();
const { getCompras, getCompraById, createCompra, updateCompra, deleteCompra } = require('../controllers/compraController');
const auth = require('../middleware/auth');

router.get('/', auth, getCompras);
router.get('/:id', auth, getCompraById);
router.post('/', auth, createCompra);
router.put('/:id', auth, updateCompra);
router.delete('/:id', auth, deleteCompra);

module.exports = router;
