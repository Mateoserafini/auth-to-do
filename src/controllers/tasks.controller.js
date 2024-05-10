import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  try {
    // Obtengo todas las tareas relacionadas con el usuario
    const tasks = await Task.find({
      user: req.user.id,
    }).populate("user");
    // Envío las tareas en formato JSON como respuesta
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: "Somthing Went Wrong" });
  }
};

export const createTasks = async (req, res) => {
  try {
    const { title, description, date } = req.body;

    const newTask = new Task({
      title,
      description,
      date,
      user: req.user.id,
    });
    const savedTask = await newTask.save();
    res.json(savedTask);
  } catch (error) {
    return res.status(500).json({ message: "Somthing Went Wrong" });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate("user");

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }

  // Respondo con la tarea encontrada en formato JSON
 
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }
};

export const updateTask = async (req, res) => {
  try {
    // Busco y actualizo la tarea por ID con los datos proporcionados
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    // Verifico si la tarea fue encontrada y actualizada
    if (!task) {
      // Si no, respondo con un mensaje de error
      return res.status(404).json({ message: "Task not found" });
    }

    // Respondo con la tarea actualizada en formato JSON
    res.json(task);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }
};
