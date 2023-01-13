import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiShow, BiHide } from 'react-icons/bi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const LoginForm = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const loginHandler = async (e) => {
        e.preventDefault();

        if (email === "" && password === "") {
            toast.error('Email is required!');
            toast.error('Password is required!');
        } else {
            try {
                const res = await axios.post(
                    'https://aligate.teehtwin.org/api/login',
                    { email, password }
                );

                const { data } = res;
                
                if (res.data.status === true) {
                    localStorage.setItem('client', JSON.stringify(data.data.user));
                    localStorage.setItem('clientToken', data.data.token);
                    navigate('/');
                }
            } catch (error) {
                navigate('*');
            }
        };
    };

    return (
        <>
            <ToastContainer position="bottom-center" limit={1} pauseOnHover draggable />
            <main className="grid grid-cols-[100vw] grid-rows-[80vh] md:grid-rows-[70vh] lg:grid-rows-[46vh] lg:mt-3">
                <div className="w-[85%] sm:w-[70%] md:w-[50%] lg:w-[30%] justify-self-center self-center">
                    <p className="mb-10 text-center text-3xl">
                        Login
                    </p>
                    <form onSubmit={loginHandler} className="mb-5">
                        <div className="mb-5">
                            <label 
                                htmlFor="email"
                                className="block mb-2"
                            >
                                Email
                            </label>
                            <input 
                                required
                                type="email" 
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 rounded-md bg-transparent border border-[#170D08] focus:outline-none"
                            />
                        </div>
                        <div className="mb-8">
                            <label 
                                htmlFor="password"
                                className="block mb-2"
                            >
                                Password
                            </label>
                            <div className="w-[100%] px-3 py-2 rounded-md border border-[#170D08] focus:outline-none flex items-center justify-between">
                                <input
                                    required
                                    type={!showPassword ? "password" : "text"}
                                    placeholder="Type your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-transparent focus:outline-none"
                                />
                                <button type='button' className="cursor-pointer" onClick={() => setShowPassword(!showPassword)}> 
                                    {!showPassword ? (
                                        <BiHide size={23} color="#170D08" />
                                    ) : (
                                        <BiShow size={23} color="#170D08" />
                                    )}
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="w-full text-white text-center py-2 bg-[#623B22] rounded-md">
                            Sign In
                        </button>
                    </form>
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-x-2">
                        <p> 
                            Do not have an account?
                        </p>
                        <p className="text-[#623B22] underline font-semibold">
                            Connect with our team
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
};

export default LoginForm;