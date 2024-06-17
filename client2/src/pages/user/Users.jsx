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