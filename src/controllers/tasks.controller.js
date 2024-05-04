import Task from '../models/task.model.js'

export const getTasks = async (req, res) => {
    // Obtengo todas las tareas relacionadas con el usuario
    const tasks = await Task.find({
        user: req.user.id
    }).populate('user');
    // Envío las tareas en formato JSON como respuesta
    res.json(tasks);
};

export const createTasks = async (req, res) => {
    // Extraigo los datos de la solicitud
    const { title, description, date } = req.body;

    // Creo una nueva tarea utilizando los datos proporcionados y la ID del usuario
    const newTask = new Task({
        title,
        description,
        date,
        user: req.user.id
    });

    // Guardo la nueva tarea en la base de datos
    const savedTask = await newTask.save();
    // Respondo con la tarea guardada en formato JSON
    res.json(savedTask);
};

export const getTask = async (req, res) => {
    // Busco una tarea específica por ID
    const task = await Task.findById(req.params.id).populate('user');
    
    // Verifico si la tarea existe
    if (!task) {
        // Si no, respondo con un mensaje de error
        return res.status(404).json({ message: 'Task not found' });
    }

    // Respondo con la tarea encontrada en formato JSON
    res.json(task);
};

export const deleteTask = async (req, res) => {
    // Busco y elimino la tarea por ID
    const task = await Task.findByIdAndDelete(req.params.id);

    // Verifico si la tarea existe y fue eliminada
    if (!task) {
        // Si no, respondo con un mensaje de error
        return res.status(404).json({ message: 'Task not found' });
    }

    // Envío un código de estado 204 para indicar que la tarea fue eliminada exitosamente
    res.sendStatus(204);
};

export const updateTask = async (req, res) => {
    // Busco y actualizo la tarea por ID con los datos proporcionados
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });

    // Verifico si la tarea fue encontrada y actualizada
    if (!task) {
        // Si no, respondo con un mensaje de error
        return res.status(404).json({ message: 'Task not found' });
    }

    // Respondo con la tarea actualizada en formato JSON
    res.json(task);
};