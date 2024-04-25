// Importar la biblioteca mongoose para interactuar con una base de datos MongoDB
import mongoose from 'mongoose';

// Definir una función asíncrona que conecta a la base de datos MongoDB
export const connectDB = async () => {
    try {
        // Intentar establecer una conexión con la base de datos MongoDB
        // Usar la URL de conexión para la base de datos MongoDB especificada
        await mongoose.connect('mongodb+srv://matuserafini:45089673@cluster0.frnygq1.mongodb.net/auth-to-do?retryWrites=true&w=majority&appName=Cluster0');
        
        // Mostrar un mensaje en la consola indicando que la base de datos se ha conectado correctamente
        console.log('db connected');
    } catch (error) {
        // Si ocurre un error durante la conexión, mostrar el error en la consola
        console.log(error);
    }
};
