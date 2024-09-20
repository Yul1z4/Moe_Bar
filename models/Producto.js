const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    tipo: { type: String, required: true },
    cantidad: { type: Number, required: true, default: 0 }
});

module.exports = mongoose.model('Producto', productoSchema);
