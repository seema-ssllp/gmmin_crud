import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import "./getuser.css"

const User = () => {
    const [users, setusers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:7000/api/getall")
            setusers(response.data);

        }
        fetchData();
    }, [])
    const deleteduser = async (userId) => {
        await axios.delete(`http://localhost:7000/api/delete/${userId}`)
            .then((response) => {
                setusers((prebUser) => prebUser.filter((user) => user._id !== userId))
                console.log(response)

            }).catch((error) => {
                console.log(error)
            })
    }
    return (

        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-2'></div>

                <div className='col-sm-6 bg-info mt-5'>
                    <button className='mt-3 mb-3  p-1  text-white bg-warning ' style={{ border: 'none' }}> <Link to={"/add"} className='addbutton text-white p-3 ' style={{ textDecoration: 'none' }}>Add User</Link></button>
                    <table class="table">
                        <thead className='bg-primary'>
                            <tr  >
                                <th scope="col">SR No</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            users.map((user, index) => {
                                return (
                                    <tr key={user._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{user.fname}{user.lname}</td>
                                        <td>{user.email}</td>
                                        <td><Link to={`/edit/` + user._id}><button type="button" class="btn btn-success">Edite</button></Link><span>
                                            <button type="button" onClick={(e) => deleteduser(user._id)} class="btn btn-danger mx-2">Delete</button></span></td>

                                    </tr>

                                )
                            })
                        }
                        <tbody>

                        </tbody>
                    </table></div>
            </div>
        </div>


    )
}

export default User