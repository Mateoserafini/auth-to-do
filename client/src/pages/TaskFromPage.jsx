import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function TaskFromPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTasks } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() =>{
    async function loadTask(){
      if(params.id){
        const task = await getTask(params.id);
        console.log(task)
        setValue('title', task.title)
        setValue('description', task.description)
      }
    }
    loadTask()
  },[])

  const onSubmit = handleSubmit((data) => {
    if(params.id){
      updateTasks(params.id, data)
    }else{
      createTask(data)
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
          <input
            type="text"
            placeholder="*Title"
            required
            {...register("title")}
            className=" w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
            autoFocus
          />
          <textarea
            placeholder="*Description"
            rows="3"
            {...register("description")}
            className=" w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
          ></textarea>
          <button>Save</button>
        </form>
      </div>
    </div>
  );
}

export default TaskFromPage;
