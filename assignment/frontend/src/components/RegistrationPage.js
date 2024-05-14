// RegistrationPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 import { useHistory } from 'react-router-dom';

import axios from 'axios';
import '../css/RreLog.css'

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const history=useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/register', formData); // Send registration data to the server
      console.log(response.data); // Log response data
      alert("Registration successfull");
      history.push('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      if(error.response && error.response.status === 409){
        setErrorMessage('Email already registered');
      }else{
        setErrorMessage('Error registering user. Please try again later.');
      }
    }
    console.log(formData);
  };

  return (
    <div className="container">
      <h2>Registration Page</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="text" name="mobileNumber" placeholder="Mobile Number" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange}  required/>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required/>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
      
    </div>
  );
};

export default RegistrationPage;
