const mongoose = require('mongoose');
const Cliente = require('../models/Cliente');
require('dotenv').config();

const clientesDePrueba = [
  {
    _id: "cliente_01",
    nombre: "Carlos",
    apellido: "Gómez",
    email: "carlos.gomez@example.com",
    telefono: "1234567890",
    direccion: "123 Calle Principal, Ciudad, País"
  },
  {
    _id: "cliente_02",
    nombre: "María",
    apellido: "Pérez",
    email: "maria.perez@example.com",
    telefono: "0987654321",
    direccion: "456 Avenida Secundaria, Ciudad, País"
  },
  {
    _id: "cliente_03",
    nombre: "Juan",
    apellido: "Fernández",
    email: "juan.fernandez@example.com",
    telefono: "1122334455",
    direccion: "789 Calle Tercera, Ciudad, País"
  },
  {
    _id: "cliente_04",
    nombre: "Lucía",
    apellido: "Ramírez",
    email: "lucia.ramirez@example.com",
    telefono: "2233445566",
    direccion: "1011 Boulevard Cuarta, Ciudad, País"
  },
  {
    _id: "cliente_05",
    nombre: "Pedro",
    apellido: "Martínez",
    email: "pedro.martinez@example.com",
    telefono: "3344556677",
    direccion: "1213 Calle Quinta, Ciudad, País"
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: 'MOE' });
    console.log('Conectado a MongoDB exitosamente');
    await Cliente.deleteMany({});
    await Cliente.insertMany(clientesDePrueba);
    console.log('Clientes insertados exitosamente');
  } catch (error) {
    console.error('Error al sembrar la base de datos:', error);
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
