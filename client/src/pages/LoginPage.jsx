import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: LoginErrors } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <div className=" flex h-[calc(100vh)] items-center justify-center">
      <div className=" bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <h1 className=" text-2xl font-bold">Login</h1>
        {LoginErrors.map((error, i) => (
          <div
            className="bg-red-500 px-4 py-2 my-2 text-white rounded-md text-center"
            key={i}
          >
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="*Email"
          />
          {errors.email && <p className=" text-red-500">Email is required</p>}
          <input
            type="text"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="*Password"
          />
          {errors.password && (
            <p className=" text-red-500">Password is required</p>
          )}
          <button type="submit">Login</button>
        </form>
        <p className=" flex gap-x-2 justify-between">
          Dont have an account? <Link to="/register" className=" text-sky-500">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;