// Importar el módulo Router desde express
import { Router } from "express";

// Importar las funciones de los controladores de autenticación desde 'auth.controller.js'
import {
  register,
  login,
  logout,
  profile,
  verifyToken,
} from "../controllers/auth.controller.js";

//
import { authRequired } from "../middlewares/validateToken.js";

// Crear una instancia de router utilizando Router()
const router = Router();

import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

// Configurar una ruta POST para el registro de usuarios y vincularla con la función 'register' del controlador
router.post("/register", validateSchema(registerSchema), register);

// Configurar una ruta POST para el inicio de sesión de usuarios y vincularla con la función 'login' del controlador
router.post("/login", validateSchema(loginSchema), login);

// Configurar una ruta POST para cerrar sesión y vincularla con la función 'logout' del controlador
router.post("/logout", logout);

router.get("/profile", authRequired, profile);

router.get("/verify", verifyToken);

// Exportar el router para su uso en otros archivos
export default router;
