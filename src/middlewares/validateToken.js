import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

// Middleware para verificar si un usuario está autenticado
export const authRequired = (req, res, next) => {
  // Obtengo el token de la solicitud a través de las cookies
  const { token } = req.cookies;

  // Verifico si no hay token presente
  if (!token) {
    // Si no hay token, envío una respuesta de error con un mensaje
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  // Verifico el token utilizando el TOKEN_SECRET
  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    // Si hay un error en la verificación, envío una respuesta de error
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }

    // Si la verificación es exitosa, asigno el usuario al objeto de la solicitud
    req.user = user;

    // Llamo a la siguiente función en la cadena de middleware
    next();
  });
};
