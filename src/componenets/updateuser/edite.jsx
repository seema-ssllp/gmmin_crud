import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Edite = () => {
    const initialUserState = {
        fname: "",
        lname: "",
        email: ""
    };

    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(initialUserState);

    const inputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:7000/api/getOne/${id}`);
                setUser(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, [id]);

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:7000/api/update/${id}`, user);
            toast.success(response.data.msg, { position: "top-right" });
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-9 mt-5'>
                    <div className="w-full max-w-lg">
                        <Link to="/" className='mx-4 mt-3' style={{ textDecoration: 'none' }}>Back</Link>
                        <h4 className='mx-4 mt-2'>Update User</h4>
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitForm}>
                            <div className="mb-2">
                                <label className="block text-gray-700 text-sm font-bold" htmlFor="fname">
                                    First Name
                                </label>
                                <input
                                    onChange={inputChange}
                                    name="fname"
                                    value={user.fname}
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="fname"
                                    type="text"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-gray-700 text-sm font-bold" htmlFor="lname">
                                    Last Name
                                </label>
                                <input
                                    onChange={inputChange}
                                    name="lname"
                                    value={user.lname}
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="lname"
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-gray-700 text-sm font-bold" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    onChange={inputChange}
                                    name="email"
                                    value={user.email}
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Update User
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Edite;
