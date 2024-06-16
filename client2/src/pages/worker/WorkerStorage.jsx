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