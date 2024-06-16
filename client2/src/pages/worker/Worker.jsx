import React, { useState } from 'react';
import axios from 'axios'
import { postWorker } from '../../services/worker';

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
    
      const [message, setMessage] = useState('');

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
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
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <input type="text" name="docuPic" placeholder="Document Photo" value={formData.publicReceipt} onChange={handleChange} required />
            <input type="text" name="perfPic" placeholder="Perfil Photo" value={formData.cellnumber} onChange={handleChange} required />
            <select class="form-select" aria-label="Default select example">
                <option selected>Labour</option>
                <option value="1">One</option>
                
                </select>
            <button type="submit">Register</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      );
    };
export default ManageWorker;