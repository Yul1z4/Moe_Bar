const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    _id: String,
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefono: { type: String },
    direccion: { type: String },
});

module.exports = mongoose.model('Cliente', clienteSchema);
