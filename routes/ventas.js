const express = require('express');
const router = express.Router();
const { getVentas, getVentaById, createVenta, updateVenta } = require('../controllers/ventaController');
const auth = require('../middleware/auth');

router.get('/', auth, getVentas);
router.get('/:id', auth, getVentaById);
router.post('/', auth, createVenta);
router.put('/:id', auth, updateVenta);

module.exports = router;
