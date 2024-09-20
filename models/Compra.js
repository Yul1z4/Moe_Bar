const mongoose = require('mongoose');

const compraSchema = new mongoose.Schema({
    _id: String,
    proveedor_id: { type: String, required: true },
    fecha: { type: Date, required: true },
    total: { type: Number, required: true },
    estado: {
        type: String,
        enum: ['pendiente', 'cancelado', 'completado'],
        default: 'pendiente'
    },
    productos_servicios: [
        {
            producto_servicio_id: String,
            nombre: String,
            precio: Number,
            cantidad: Number,
        }
    ]
});

module.exports = mongoose.model('Compra', compraSchema);
