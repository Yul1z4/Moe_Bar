const mongoose = require('mongoose');
const Compra = require('../models/Compra');
require('dotenv').config();

const comprasDePrueba = [
  {
    _id: "compra_001",
    proveedor_id: "Proveedor_001",
    fecha: "2024-08-01",
    total: 150.00,
    estado: "pendiente",
    productos_servicios: [
      {
        producto_servicio_id: "producto_001",
        nombre: "Entrenamiento Personalizado",
        precio: 100.00
      },
      {
        producto_servicio_id: "producto_002",
        nombre: "Suplemento Proteico",
        precio: 50.00
      }
    ]
  },
  {
    _id: "compra_002",
    proveedor_id: "Proveedor_002",
    fecha: "2024-08-05",
    total: 200.00,
    estado: "pendiente",
    productos_servicios: [
      {
        producto_servicio_id: "producto_003",
        nombre: "Plan de Nutrición",
        precio: 120.00
      },
      {
        producto_servicio_id: "producto_004",
        nombre: "Suplemento Vitaminico",
        precio: 80.00
      }
    ]
  },
  {
    _id: "compra_003",
    proveedor_id: "Proveedor_003",
    fecha: "2024-08-10",
    total: 250.00,
    estado: "pendiente",
    productos_servicios: [
      {
        producto_servicio_id: "producto_005",
        nombre: "Consultoría Fitness",
        precio: 150.00
      },
      {
        producto_servicio_id: "producto_006",
        nombre: "Equipos de Gimnasio",
        precio: 100.00
      }
    ]
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: 'MOE' });
    console.log('Conectado a MongoDB exitosamente');
    await Compra.deleteMany({});
    await Compra.insertMany(comprasDePrueba);
    console.log('Compras insertadas exitosamente');
  } catch (error) {
    console.error('Error al sembrar la base de datos:', error);
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
