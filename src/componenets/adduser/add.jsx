import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Add = () => {
    const initialUserState = {
        fname: "",
        lname: "",
        email: "",
        password: ""
    };

    const [user, setUser] = useState(initialUserState);
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:7000/api/create", user);
            toast.success(response.data.msg || "User created successfully", { position: "top-right" });
            navigate("/");
        } catch (error) {
            console.error("There was an error making the request:", error);
            toast.error("There was an error creating the user", { position: "top-right" });
        }
    };

    return (
        <div className='container-fluid'>
            <Toaster />
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-9 mt-5'>
                    <div className="w-full max-w-lg">
                        <Link to={"/"} className='mx-4 mt-3' style={{ textDecoration: 'none' }}>Back</Link>
                        <h4 className='mx-4 mt-2'>Add User</h4>
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitForm}>
                            <div className="mb-2">
                                <label className="block text-gray-700 text-sm font-bold" htmlFor="fname">
                                    First Name
                                </label>
                                <input
                                    onChange={inputHandler}
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="fname"
                                    type="text"
                                    name="fname"
                                    placeholder="First Name"
                                    value={user.fname}
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-gray-700 text-sm font-bold" htmlFor="lname">
                                    Last Name
                                </label>
                                <input
                                    onChange={inputHandler}
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="lname"
                                    type="text"
                                    name="lname"
                                    placeholder="Last Name"
                                    value={user.lname}
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-gray-700 text-sm font-bold" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    onChange={inputHandler}
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={user.email}
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    onChange={inputHandler}
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="******************"
                                    value={user.password}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Add User
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;
