import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const { register,handleSubmit, formState:{errors} } = useForm();
    const { signup, isAuthenticated, errors: RegisterErrors} = useAuth();
    const navigate = useNavigate();

    useEffect(()=> {
        if (isAuthenticated == true) navigate("/tasks")
    }, [isAuthenticated])

    const onSubmit = handleSubmit( async (values) => { 
        await signup(values);
    })

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md ">
        <form onSubmit={onSubmit}>
            {
                RegisterErrors.map((error,i) => ( 
                    <div className="bg-red-500 px-4 py-2 my-2 text-white rounded-md" key={i}>
                        {error}
                    </div>

                ))
            }
            <input type="text" {...register("username", {required: true})} 
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                placeholder="Username"
            />
            {
            errors.username && (
                <p className=' text-red-500'>Username is required</p>
            )
            }
            <input type="text" {...register("email", {required: true})} 
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                placeholder="Email"
            />
            {
            errors.username && (
                <p className=' text-red-500'>Email is required</p>
            )
            }
            <input type="text" {...register("password", {required: true})} 
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                placeholder="Password"    
            />
            {
            errors.username && (
                <p className=' text-red-500'>Password is required</p>
            )
            }
            <button type="submit">
                Register
            </button>
        </form>
    </div>
  )
}

export default RegisterPage