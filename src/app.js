// Importo express, un framework para crear servidores web
import express from "express";

// Importo morgan, una biblioteca para registrar las solicitudes HTTP en la consola
import morgan from "morgan";

// Importo cookieParser, una biblioteca para analizar cookies en las solicitudes
import cookieParser from "cookie-parser";

import cors from "cors";

// Importo las rutas de autenticación desde el archivo 'auth.router.js'
import authRoutes from "./routes/auth.router.js";

// Importo las rutas de tareas desde el archivo 'tasks.router.js'
import tasksRoutes from "./routes/tasks.router.js";

// Creo una instancia de la aplicación express
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Uso morgan en el modo 'dev' para registrar las solicitudes HTTP en la consola
app.use(morgan("dev"));

// Configuro express para analizar las solicitudes en formato JSON
app.use(express.json());

// Configuro express para analizar cookies en las solicitudes
app.use(cookieParser());

// Uso las rutas de autenticación bajo el prefijo '/api'
app.use("/api", authRoutes);

// Uso las rutas de tareas bajo el prefijo '/api'
app.use("/api", tasksRoutes);

// Exporto la aplicación express para su uso en otros archivos
export default app;
