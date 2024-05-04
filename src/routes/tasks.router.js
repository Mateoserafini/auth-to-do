import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import {
    getTasks,
    createTasks,
    getTask,
    updateTask,
    deleteTask
} from '../controllers/tasks.controller.js';

// Creo una instancia de Router para definir las rutas relacionadas con las tareas
const router = Router();

// Ruta para obtener todas las tareas del usuario autenticado
router.get('/tasks', authRequired, getTasks);

// Ruta para obtener una tarea específica por su ID
router.get('/tasks/:id', authRequired, getTask);

// Ruta para crear una nueva tarea
router.post('/tasks', authRequired, createTasks);

// Ruta para eliminar una tarea específica por su ID
router.delete('/tasks/:id', authRequired, deleteTask);

// Ruta para actualizar una tarea específica por su ID
router.put('/tasks/:id', authRequired, updateTask);

// Exporto el router para usarlo en la aplicación principal
export default router;
