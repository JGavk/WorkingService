import React, { useState } from 'react';
import axios from 'axios'
import { postUsers } from '../../services/users';

const ManageUsers = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        password: '',
        publicReceipt: '',
        cellNumber: '',
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
            const response = await postUsers(formData);  
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
            <input type="text" name="email" placeholder="email" value={formData.username} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <input type="text" name="publicReceipt" placeholder="Public Receipt" value={formData.publicReceipt} onChange={handleChange} required />
            <input type="text" name="cellNumber" placeholder="Phone Number" value={formData.cellnumber} onChange={handleChange} required />
            <button type="submit">Register</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      );
    };
export default ManageUsers;