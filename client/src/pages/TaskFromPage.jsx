import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";
import { Navigate, useNavigate } from "react-router-dom";

function TaskFromPage() {
  const { register, handleSubmit } = useForm();
  const { createTask } = useTasks();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    createTask(data);
    navigate('/tasks');
  });

  return (
    <div className="flex h-[calc(100vh)] items-center justify-center">
      <div className=" bg-zinc-800 max-w-md w-full p-10 rounded-md">
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
