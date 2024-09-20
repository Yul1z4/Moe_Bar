const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const app = express();
connectDB();
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/clientes', require('./routes/client'));
app.use('/api/productos', require('./routes/products'));
app.use('/api/proveedores', require('./routes/proveedor'));
app.use('/api/compras', require('./routes/compras'));
app.use('/api/ventas', require('./routes/ventas'));

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Taberna de MOE</title>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #f0f0f0;
                    font-family: Arial, sans-serif;
                }
                .container {
                    text-align: center;
                }
                h1 {
                    color: #333;
                }
                .message {
                    margin-top: 20px;
                    font-size: 24px;
                    color: #555;
                }
                .image-container img {
                    width: 200px;
                    height: 200px;
                    border-radius: 50%; /* Ajusta esto según el nivel de redondeo deseado */
                    animation: bounce 2s infinite;
                }
                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="image-container">
                    <img src="/favicon.ico" alt="Bienvenido">
                </div>
                <h1>Taberna de MOE</h1>
                <p class="message">"Ah emborracharnos"</p>
            </div>
        </body>
        </html>

    `);
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
