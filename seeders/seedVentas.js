const mongoose = require('mongoose');
const Venta = require('../models/Venta');
require('dotenv').config();

const ventasDePrueba = [
  {
    _id: "venta_001",
    cliente_id: "cliente_001",
    fecha: "2024-08-02",
    total: 200.00,
    estado: "cancelada",
    productos_servicios: [
      {
        producto_servicio_id: "producto_003",
        nombre: "Clase de Yoga",
        precio: 150.00,
        cantidad: 2
      },
      {
        producto_servicio_id: "producto_004",
        nombre: "Manta de Yoga",
        precio: 50.00,
        cantidad: 3
      }
    ]
  },
  {
    _id: "venta_002",
    cliente_id: "cliente_002",
    fecha: "2024-08-10",
    total: 250.00,
    productos_servicios: [
      {
        producto_servicio_id: "producto_005",
        nombre: "Clase de Pilates",
        precio: 200.00,
        cantidad: 1
      },
      {
        producto_servicio_id: "producto_006",
        nombre: "Botellas de Agua",
        precio: 50.00,
        cantidad: 5
      }
    ]
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: 'MOE' });
    console.log('Conectado a MongoDB exitosamente');
    await Venta.deleteMany({});
    await Venta.insertMany(ventasDePrueba);
    console.log('Ventas insertadas exitosamente');
  } catch (error) {
    console.error('Error al sembrar la base de datos:', error);
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
