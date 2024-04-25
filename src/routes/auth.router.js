// Importar el módulo Router desde express
import { Router } from 'express';

// Crear una instancia de router utilizando Router()
const router = Router();

// Importar las funciones de los controladores de autenticación desde 'auth.controller.js'
import { register, login, logout } from '../controllers/auth.controller.js';

// Configurar una ruta POST para el registro de usuarios y vincularla con la función 'register' del controlador
router.post('/register', register);

// Configurar una ruta POST para el inicio de sesión de usuarios y vincularla con la función 'login' del controlador
router.post('/login', login);

// Configurar una ruta POST para cerrar sesión y vincularla con la función 'logout' del controlador
router.post('/logout', logout);

// Exportar el router para su uso en otros archivos
export default router;