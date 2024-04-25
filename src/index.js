// Importar la aplicación desde el archivo 'app.js'
import app from './app.js';

// Importar la función de conexión a la base de datos desde el archivo 'db.js'
import { connectDB } from './db.js';

// Llamar a la función para conectar a la base de datos
connectDB();

// Iniciar el servidor y escuchar en el puerto 3000
app.listen(3000);

// Mostrar un mensaje en la consola indicando en qué puerto y URL se está ejecutando el servidor
console.log(`Servidor en el puerto 3000: ${'http://localhost:3000'}`);


//back tics agr + }