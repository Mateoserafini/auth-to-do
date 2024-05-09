import axios from "./axios";

export const getTasksRequest = () => axios.get("/tasks");

export const getTaskRequest = (id) => axios.get(`/task/${task._id}`);

export const createTaskRequest = (task) => axios.post("/tasks", task);

export const updateTasksRequest = (task) =>
  axios.put(`/task/${task._id}`, task);

export const deleteTasksRequest = (id) => axios.get(`/task/${task._id}`);
