const express = require('express');
const router = express.Router();
const { getUsers, getUserById, createUser, updateUserById, deleteUserById } = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/', auth, getUsers);
router.get('/:id', auth, getUserById);
router.post('/', auth, createUser);
router.put('/:id', auth, updateUserById);
router.delete('/:id', auth, deleteUserById);

module.exports = router;
