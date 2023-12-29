//import { height } from '@mui/system';
import React from 'react';
//import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
// import LoginIcon from '@mui/icons-material/Login';
// import { responsiveFontSizes } from '@mui/material';

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <div class="w-96" style={{marginLeft:"560px", margin: "auto", justifyContent: "center", marginBottom: "325px"}}>
                <h2 style={{textAlign:"center"}}>Login Form</h2>
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Username
                        </label>
                        <input {...register("username", { required: true, maxLength: 12 })} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                    </div>
                    {errors.username && <p className="text-red-500 text-xs italic">Please check Your Email</p>}
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}
                         class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" {...register("firstName", { required: true, maxLength: 10 })} id="password" type="password" placeholder="******"/>
                            {/* <p class="">Please choose a password.</p> */}
                    </div>
                    { errors.password && <p className="text-red-500 text-xs italic">Please check the Password</p>}
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign In
                        </button>
                        {/* <a class="justify-center content-center" href="##"><img style={{width:"30px",height:"30px",marginRight:"50px"}} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="Google_logo"/></a> */}
                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="##">
                            Forgot Password?
                        </a>
                    </div>
                    <div class="flex items-center justify-evenly mt-4">
                        <Link to="/SignUp" class="inline-block align-baseline font-bold text-sm text-black hover:text-blue-800">New User ? Register here</Link>
                        {/* <Link to="/SignUp" class="inline-block align-baseline font-bold text-sm text-black">Sign Up</Link> */}
                    </div>
                </form>
            </div>
        </>
    )
}

