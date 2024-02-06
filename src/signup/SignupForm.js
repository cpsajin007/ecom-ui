// SignupForm.js
import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Thank you for signing up!');
    try {
      const response = await axios.post('http://localhost:3001/api/v1/users/signup', formData);
      console.log(response.data); // handle successful signup
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Server responded with status:', error.response.status);
        console.error('Response data:', error.response.data);
        setError(error.response.data.message || 'Server Error');
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
        setError('No response from server');
      } else {
        // Something happened in setting up the request that triggered an error
        console.error('Error:', error.message);
        setError(error.message || 'Request Error');
      }
    }
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: '0 auto', textAlign: 'center' }}>
  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px' }} />
  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px' }} />
  <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px' }} />
  <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign Up</button>
</form>
{message && <p>{message}</p>}
    </div>
  );
};

export default SignupForm;
