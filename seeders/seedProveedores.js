const mongoose = require('mongoose');
const Proveedor = require('../models/Proveedor');
require('dotenv').config();

const proveedoresDePrueba = [
  {
    _id: "Proveedor_001",
    nombre: "Juan",
    apellido: "Pérez",
    correo: "juan.perez@example.com",
    telefono: "123456789",
    direccion: "Calle Falsa 123, Madrid",
    compras: [
      {
        compra_id: "compra_001",
        fecha: "2024-08-01",
        total: 150.00,
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
      }
    ]
  },
  {
    _id: "Proveedor_002",
    nombre: "Ana",
    apellido: "Gómez",
    correo: "ana.gomez@example.com",
    telefono: "987654321",
    direccion: "Avenida Principal 456, Barcelona",
    compras: [
      {
        compra_id: "compra_002",
        fecha: "2024-08-15",
        total: 200.00,
        productos_servicios: [
          {
            producto_servicio_id: "producto_003",
            nombre: "Asesoría Empresarial",
            precio: 150.00
          },
          {
            producto_servicio_id: "producto_004",
            nombre: "Curso de Marketing",
            precio: 50.00
          }
        ]
      }
    ]
  },
  {
    _id: "Proveedor_003",
    nombre: "Luis",
    apellido: "Martínez",
    correo: "luis.martinez@example.com",
    telefono: "456789123",
    direccion: "Calle Secundaria 789, Valencia",
    compras: [
      {
        compra_id: "compra_003",
        fecha: "2024-08-20",
        total: 120.00,
        productos_servicios: [
          {
            producto_servicio_id: "producto_005",
            nombre: "Consultoría en TI",
            precio: 120.00
          }
        ]
      }
    ]
  },
  {
    _id: "Proveedor_004",
    nombre: "María",
    apellido: "Fernández",
    correo: "maria.fernandez@example.com",
    telefono: "321654987",
    direccion: "Calle Tercera 1011, Sevilla",
    compras: [
      {
        compra_id: "compra_004",
        fecha: "2024-08-25",
        total: 180.00,
        productos_servicios: [
          {
            producto_servicio_id: "producto_006",
            nombre: "Mantenimiento de Sistemas",
            precio: 180.00
          }
        ]
      }
    ]
  },
  {
    _id: "Proveedor_005",
    nombre: "Carlos",
    apellido: "Hernández",
    correo: "carlos.hernandez@example.com",
    telefono: "654321789",
    direccion: "Calle Cuarta 1213, Bilbao",
    compras: [
      {
        compra_id: "compra_005",
        fecha: "2024-08-30",
        total: 250.00,
        productos_servicios: [
          {
            producto_servicio_id: "producto_007",
            nombre: "Desarrollo Web",
            precio: 250.00
          }
        ]
      }
    ]
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: 'MOE' });
    console.log('Conectado a MongoDB exitosamente');

    await Proveedor.deleteMany({});

    await Proveedor.insertMany(proveedoresDePrueba);
    console.log('Proveedores insertados exitosamente');
  } catch (error) {
    console.error('Error al sembrar la base de datos:', error);
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
