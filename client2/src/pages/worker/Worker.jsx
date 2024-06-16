import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { postWorker } from '../../services/worker';
import { getLabour } from '../../services/worker';
import { useNavigate } from 'react-router-dom';

const ManageWorker = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        username: '',
        password: '',
        docuPic: '',
        perfPic: '',
        labourId: '',
      });
      
      const navigate = useNavigate();

      const [message, setMessage] = useState('');

      const [allLabours, setAllLabours] = useState();

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

      useEffect (() => {
        getLabour().then(
            response => {
                setAllLabours(response.data);
            }
        )

      }, [])
      const handleNavHome =() =>{
        navigate('/')
      }
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await postWorker(formData);  
            setMessage('Registration successful!');
        } catch (error) {
            setMessage('Registration failed: ' + error.message);
        }
    };

      return (
        <div className="container mt-5">
            <h2> Worker Register </h2>
          <form className="text-start" onSubmit={handleSubmit}>
            <div>
                <label className="form-label"> First Name </label>
                <input className="form-control" type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div>
                <label className="form-label"> Last Name </label>
                <input className="form-control" type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div>
                <label className="form-label"> Address </label>
                <input className="form-control" type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
            </div>
            <div>
                <label className="form-label"> Username </label>
                <input className="form-control"  type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
            </div>
            <div>   
                <label className="form-label"> Password </label>
                <input className="form-control" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            </div>
            <div>
                <label className="form-label"> Document </label>
                <input className="form-control" type="text" name="docuPic" placeholder="Document Photo" value={formData.publicReceipt} onChange={handleChange} required />
            </div>
            <div>
                <label className="form-label"> Perfil Picture </label>
                <input className="form-control" type="text" name="perfPic" placeholder="Photo url" value={formData.cellnumber} onChange={handleChange} required />
            </div>
            <div>
                <label className="form-label"> Select a Labour </label>
                <select className="form-select" name="labourId" onChange={handleChange}>
                    <option value={''}>Labour</option>
                    
                    {allLabours && allLabours.map(i =>{
                        return (
                            <option value={i.id} key={i.id}>{i.labourName}</option>
                        )
                    } )}
                </select>
            </div>    
            <button className="btn mt-3 btn-primary" type="submit" onClick={handleNavHome}>Register</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      );
    };
export default ManageWorker;