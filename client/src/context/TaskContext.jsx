import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTasksRequest, getTaskRequest, deleteTasksRequest, updateTasksRequest } from "../api/tasks";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaks must be used within a TaskProvider");
  }
  return context;
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
        const res = await getTasksRequest() 
        setTasks(res.data)
    } catch (error) {
        console.log(error)
    }
  };
  const createTask = async (task) =>{
    const res =await createTaskRequest(task)
    console.log(res)
  }
  
  const deleteTask = async(id) =>  {
    try {
      const res = await deleteTasksRequest(id);
      if(res.status === 204) setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error)
    }
  };

  const getTask = async (id) =>{
    try {
      const res = await getTaskRequest(id);
      return res.data;
    } catch (error) {
      console.log(error)
    }
  }

  const updateTasks = async (id, task) =>{
    try {
      await updateTasksRequest(id, task)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        getTasks,
        createTask,
        deleteTask,
        getTask,
        updateTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
