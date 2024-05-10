import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);




function TaskFromPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTasks } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() =>{
    async function loadTask(){
      if(params.id){
        const task = await getTask(params.id);
        const dateFormat = dayjs(task.date).utc().format("YYYY-MM-DD");

        console.log(task)
        setValue('title', task.title)
        setValue('description', task.description)
        setValue('date', dateFormat)
      }
    }
    loadTask()
  },[])

  const onSubmit = handleSubmit((data) => {
    if(params.id){
      updateTasks(params.id,{...data, date: dayjs.utc(data.date).format(),})
    }else{
      createTask({...data, date: dayjs.utc(data.date).format(),})
    }
    navigate('/tasks')
  });

  return (
    <div className="flex h-[calc(100vh)] items-center justify-center">
      <div className=" bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <h1 className=" text-2xl font-bold">
        {
          params.id ? ('Update Task') : ('Add Task')
        }
      </h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="*Title"
            required
            {...register("title")}
            className=" w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
            autoFocus
          />
          <label htmlFor="description">Description</label>
          <textarea
            placeholder="*Description"
            rows="3"
            {...register("description")}
            className=" w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
          ></textarea>
          <label htmlFor="date">Date</label>
          <input type="date" {...register('date')} className=" w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
            autoFocus />
          <button className=" bg-indigo-600 px-4 py-1 rounded-md">Save</button>
        </form>
      </div>
    </div>
  );
}

export default TaskFromPage;
