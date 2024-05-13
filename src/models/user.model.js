// Importar mongoose, una biblioteca para trabajar con MongoDB desde Node.js
import mongoose from "mongoose";

// Definir un esquema para la colección de usuarios en la base de datos
const userSchema = new mongoose.Schema(
  {
    // Campo 'username' para almacenar el nombre de usuario
    username: {
      type: String, // Tipo de dato es String
      require: true, // Es obligatorio
      trim: true, // Elimina espacios en blanco al principio y al final del valor
    },
    // Campo 'email' para almacenar el correo electrónico del usuario
    email: {
      type: String, // Tipo de dato es String
      require: true, // Es obligatorio
      trim: true, // Elimina espacios en blanco al principio y al final del valor
      unique: true, // Debe ser único en la colección
    },
    // Campo 'password' para almacenar la contraseña del usuario
    password: {
      type: String, // Tipo de dato es String
      require: true, // Es obligatorio
      trim: true, // Elimina espacios en blanco al principio y al final del valor
    },
  },
  {
    // Opciones adicionales del esquema
    timestamps: true, // Agrega automáticamente campos 'createdAt' y 'updatedAt'
  }
);

// Exportar el modelo de usuario usando el esquema definido
export default mongoose.model("User", userSchema);
