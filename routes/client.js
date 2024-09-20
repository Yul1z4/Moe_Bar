const express = require('express');
const router = express.Router();
const { getClientes, getClienteById, createCliente, updateCliente, deleteCliente } = require('../controllers/clienteController');
const auth = require('../middleware/auth');

router.get('/', auth, getClientes);
router.get('/:id', auth, getClienteById);
router.post('/', auth, createCliente);
router.put('/:id', auth, updateCliente);
router.delete('/:id', auth, deleteCliente);

module.exports = router;
