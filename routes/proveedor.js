const express = require('express');
const router = express.Router();
const { getProveedores, getProveedorById, createProveedor, updateProveedor, deleteProveedor } = require('../controllers/proveedorController');
const auth = require('../middleware/auth');

router.get('/', auth, getProveedores);
router.get('/:id', auth, getProveedorById);
router.post('/', auth, createProveedor);
router.put('/:id', auth, updateProveedor);
router.delete('/:id', auth, deleteProveedor);

module.exports = router;
