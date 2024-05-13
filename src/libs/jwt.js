// Importar TOKEN_SECRET desde el archivo de configuración
import { TOKEN_SECRET } from "../config.js";

// Importar la biblioteca jsonwebtoken para trabajar con tokens JWT
import jwt from "jsonwebtoken";

// Función para crear un token de acceso
export function createAccessToken(payload) {
  // Devolver una nueva promesa
  return new Promise((resolve, reject) => {
    // Utilizar jwt.sign() para firmar el token con la carga útil y la clave secreta
    jwt.sign(
      payload, // La carga útil que se incluirá en el token
      TOKEN_SECRET, // La clave secreta para firmar el token
      {
        expiresIn: "1d", // El token expirará en 1 día
      },
      (error, token) => {
        // Manejar el resultado de la firma
        if (error) reject(error); // Si hay un error, rechazar la promesa con el error
        resolve(token); // Si no hay errores, resolver la promesa con el token generado
      }
    );
  });
}
