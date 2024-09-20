const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
require('dotenv').config();

const usuariosDePrueba = [
  {
    name: "Juan Perez",
    email: "juan.perez@example.com",
    password: "password123"
  },
  {
    name: "Maria Lopez",
    email: "maria.lopez@example.com",
    password: "password123"
  },
  {
    name: "Carlos Gomez",
    email: "carlos.gomez@example.com",
    password: "password123"
  },
  {
    name: "Laura Martinez",
    email: "laura.martinez@example.com",
    password: "password123"
  },
  {
    name: "Ana Rodriguez",
    email: "ana.rodriguez@example.com",
    password: "password123"
  },
  {
    name: "Sebas Roldan",
    email: "correo@correo",
    password: "1234567"
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: 'MOE' });
    console.log('Conectado a MongoDB exitosamente');
    await User.deleteMany({});
    const hashedUsers = await Promise.all(
      usuariosDePrueba.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return { ...user, password: hashedPassword };
      })
    );
    await User.insertMany(hashedUsers);
    console.log('Usuarios insertados exitosamente');
  } catch (error) {
    console.error('Error al sembrar la base de datos:', error);
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
