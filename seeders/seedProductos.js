const mongoose = require('mongoose');
const Producto = require('../models/Producto');
require('dotenv').config();

const productosDePrueba = [
  {
    nombre: "Suplemento Proteico",
    descripcion: "Proteína en polvo para apoyar la ganancia muscular.",
    precio: 50.00,
    tipo: "Producto",
    cantidad: 100
  },
  {
    nombre: "Multivitamínico Daily",
    descripcion: "Suplemento diario con vitaminas y minerales esenciales.",
    precio: 30.00,
    tipo: "Producto",
    cantidad: 200
  },
  {
    nombre: "Aminoácidos BCAA",
    descripcion: "Aminoácidos de cadena ramificada para recuperación muscular.",
    precio: 40.00,
    tipo: "Producto",
    cantidad: 150
  },
  {
    nombre: "Creatina Monohidrato",
    descripcion: "Suplemento para aumentar la fuerza y el rendimiento en el entrenamiento.",
    precio: 35.00,
    tipo: "Producto",
    cantidad: 120
  },
  {
    nombre: "Omega 3",
    descripcion: "Suplemento de aceite de pescado para la salud cardiovascular.",
    precio: 25.00,
    tipo: "Producto",
    cantidad: 180
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: 'MOE' });
    console.log('Conectado a MongoDB exitosamente');
    await Producto.deleteMany({});
    await Producto.insertMany(productosDePrueba);
    console.log('Productos insertados exitosamente');
  } catch (error) {
    console.error('Error al sembrar la base de datos:', error);
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
