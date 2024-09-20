const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
  _id: String,
  cliente_id: { type: String, required: true },
  fecha: { type: Date, required: true },
  total: { type: Number, required: true },
  estado: {
    type: String,
    enum: ['cancelada', 'completada'],
    default: 'completada'
},
  productos_servicios: [
    {
      producto_servicio_id: String,
      nombre: String,
      precio: Number,
      cantidad : Number,
    }
  ]
});

module.exports = mongoose.model('Venta', ventaSchema);
