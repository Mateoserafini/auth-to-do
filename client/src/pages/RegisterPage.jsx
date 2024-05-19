import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated == true) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    await signup(values);
  });

  return (
    <div className="flex h-[calc(100vh)] items-center justify-center">
      <div className=" bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <h1 className=" text-2xl font-bold py-2">Register</h1>
        {RegisterErrors.map((error, i) => (
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
            {...register("username", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="*Username"
          />
          {errors.username && (
            <p className=" text-red-500">Username is required</p>
          )}
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
            Register
          </button>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-sky-500">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
