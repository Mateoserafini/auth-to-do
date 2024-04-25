// Importar el modelo de usuario desde 'user.model.js'
import User from '../models/user.model.js';

// Importar bcryptjs, una biblioteca para encriptar contraseñas
import bcript from 'bcryptjs';

// Importar la función para crear tokens de acceso desde 'jwt.js'
import { createAccessToken } from '../libs/jwt.js';

// Función para manejar el registro de un nuevo usuario
export const register = async (req, res) => {
    // Obtener email, password y username de la solicitud
    const { email, password, username } = req.body;

    try {
        // Encriptar la contraseña con un factor de costo de 10
        const passwordHash = await bcript.hash(password, 10);

        // Crear una nueva instancia de usuario con los datos recibidos
        const newUser = new User({
            username,
            email,
            password: passwordHash,
        });

        // Guardar el nuevo usuario en la base de datos
        const userSaved = await newUser.save();

        // Crear un token de acceso para el nuevo usuario
        const token = await createAccessToken({ id: userSaved._id });

        // Configurar una cookie con el token
        res.cookie('token', token);

        // Responder con los datos del usuario guardado
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        });

    } catch (error) {
        // Si ocurre un error, responder con un estado 500 y el mensaje del error
        res.status(500).json({ message: error.message });
    }
};

// Función para manejar el inicio de sesión de un usuario
export const login = async (req, res) => {
    // Obtener email y password de la solicitud
    const { email, password } = req.body;

    try {
        // Buscar un usuario con el email proporcionado
        const userFound = await User.findOne({ email });

        // Si no se encuentra el usuario, responder con un estado 400
        if (!userFound) return res.status(400).json({ message: "User not found" });

        // Comparar la contraseña proporcionada con la almacenada
        const isMatch = await bcript.compare(password, userFound.password);

        // Si las contraseñas no coinciden, responder con un estado 400
        if (!isMatch) return res.status(400).json({ message: 'Incorrect password' });

        // Crear un token de acceso para el usuario
        const token = await createAccessToken({ id: userFound._id });

        // Configurar una cookie con el token
        res.cookie('token', token);

        // Responder con los datos del usuario encontrado
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        });

    } catch (error) {
        // Si ocurre un error, responder con un estado 500 y el mensaje del error
        res.status(500).json({ message: error.message });
    }
};

// Función para manejar el cierre de sesión de un usuario
export const logout = async (req, res) => {
    // Configurar una cookie con el token vacío y una expiración inmediata
    res.cookie('token', '', {
        expires: new Date(0),
    });

    // Responder con un estado 200 para indicar éxito
    return res.sendStatus(200);
};