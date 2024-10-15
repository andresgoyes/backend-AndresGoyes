import express from 'express';
import "dotenv/config.js";
import "./config/database.js";
import cors from 'cors';
import morgan from 'morgan';
import indexRouter from './router/index.js'; // Importa el enrutador principal

const server = express();
const PORT = process.env.PORT || 8080;
const ready = () => console.log(`Server running on port: ${PORT}`);

// Middleware para analizar JSON y datos de formularios
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Habilita CORS y el registro de peticiones
server.use(cors());
server.use(morgan('dev'));

// Rutas básicas de prueba
server.get('/', (request, response) => {
    response.send('Hola mundo Express');
});

server.get('/saludo', (request, response) => {
    response.send('Hola Andres Express');
});

// Usar el enrutador principal para manejar las rutas API
server.use('/api', indexRouter);

// Iniciar el servidor
server.listen(PORT, ready);