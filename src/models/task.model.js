import mongoose from "mongoose";

// Creo un esquema para las tareas utilizando mongoose
const taskSchema = new mongoose.Schema({
    // Defino la propiedad "title" de la tarea
    title: {
        type: String,
        required: true // Corrijo la ortografía de 'require' a 'required'
    },
    // Defino la propiedad "description" de la tarea
    description: {
        type: String,
        required: true // Corrijo la ortografía de 'require' a 'required'
    },
    // Defino la propiedad "date" de la tarea
    date: {
        type: Date,
        default: Date.now // Establezco la fecha predeterminada como la fecha actual
    },
    // Defino la propiedad "user" que referencia al usuario que creó la tarea
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Referencia al modelo 'User'
        required: true // Corrijo la ortografía de 'require' a 'required'
    }
}, {
    // Habilito las marcas de tiempo para crear campos de "createdAt" y "updatedAt"
    timestamps: true
});

// Exporto el modelo de tarea para que se pueda usar en otros archivos
export default mongoose.model('Task', taskSchema);
