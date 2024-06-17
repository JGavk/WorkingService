import React, { useEffect, useState } from 'react';
import { getUsers } from '../../services/users';
import { useNavigate } from 'react-router-dom';

const UserStorage = () =>{

    const navigate = useNavigate();

    const [allUser, setAllUsers] = useState();

    const handleNavHome =() =>{
        navigate('/')
    }
    useEffect (() => {
        getUsers().then(
            response => {
                setAllUsers(response.data);
            }
        )

    }, [])

    
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a className="navbar-brand ml-5 text-xl-start p-3" href="#">J</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/workers">Workers here!!!</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/users">Join as user!!</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/worker-storage">Watch our Workers</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/user-storage">Watch our Users</a>
            </li>
            </ul>
        </div>
        </nav>
        <div className="container mt-4">
        <table className="UserTable" name="user">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    allUser && allUser.map(i =>{
                            return (

                                <tr key={i.id}>
                                    <td>{i.id}</td>
                                    <td>{i.firstName}</td>
                                    <td>{i.lastName}</td>
                                    <td>{i.email}</td>
                                    <td>{i.address}</td>
                                </tr>
                            )
                    })
                }
            </tbody>
    </table>
    </div>
    </>
    )
}

export default UserStorage;