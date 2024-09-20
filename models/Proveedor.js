const mongoose = require('mongoose');

const productoServicioSchema = new mongoose.Schema({
  producto_servicio_id: String,
  nombre: String,
  precio: Number
});

const compraSchema = new mongoose.Schema({
  compra_id: String,
  fecha: Date,
  total: Number,
  productos_servicios: [productoServicioSchema]
});

const proveedorSchema = new mongoose.Schema({
  _id: String,
  nombre: String,
  apellido: String,
  correo: String,
  telefono: String,
  direccion: String,
  compras: [compraSchema]
});

module.exports = mongoose.model('Proveedor', proveedorSchema);
