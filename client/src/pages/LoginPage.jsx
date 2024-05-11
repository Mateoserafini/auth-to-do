import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const { signin, isAuthenticated, errors: LoginErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  return (
    <div className=" flex h-[calc(100vh)] items-center justify-center">
      <div className=" bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <h1 className=" text-2xl font-bold py-2">Login</h1>
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
          <button type="submit" className=" bg-indigo-600 px-4 py-1 rounded-md">
            Login
          </button>
        </form>
        <p>
          Dont have an account?{" "}
          <Link to="/login" className="text-sky-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
