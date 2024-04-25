// Importar express, un framework para crear servidores web
import express from 'express';

// Importar morgan, una biblioteca para registrar las solicitudes HTTP en la consola
import morgan from 'morgan';

// Importar las rutas de autenticación desde el archivo 'auth.router.js'
import authRoutes from './routes/auth.router.js';

// Crear una instancia de la aplicación express
const app = express();

// Usar morgan en el modo 'dev' para registrar las solicitudes HTTP en la consola
app.use(morgan('dev'));

// Configurar express para analizar las solicitudes en formato JSON
app.use(express.json());

// Usar las rutas de autenticación en el prefijo '/api'
app.use('/api', authRoutes);

// Exportar la aplicación express para su uso en otros archivos
export default app;
