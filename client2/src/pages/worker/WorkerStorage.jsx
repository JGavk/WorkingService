import React, { useEffect, useState } from 'react';
import { getWorkers } from "../../services/worker"
import { useNavigate } from 'react-router-dom';

const WorkerStorage = () =>{

    const navigate = useNavigate();

    const [allWorkers, setAllWorkers] = useState();

    const handleNavHome =() =>{
        navigate('/')
    }
    useEffect (() => {
        getWorkers().then(
            response => {
                setAllWorkers(response.data);
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
        <table className="WorkerTable" name="worker">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Username</th>
                <th scope="col">Status</th>
                <th scope="col">Labour</th>
                </tr>
            </thead>
            <tbody>
                {
                    allWorkers && allWorkers.map(i =>{
                            return (

                                <tr key={i.id}>
                                    <td>{i.id}</td>
                                    <td>{i.firstName}</td>
                                    <td>{i.username}</td>
                                    <td>{i.status}</td>
                                    <td>{i.labours.labour.labourName}</td>
                                </tr>
                            )
                    })
                }
            </tbody>
    </table>
    </>
    )
}

export default WorkerStorage;