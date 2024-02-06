import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/v1/users/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      // Assuming the server responds with a JSON containing the access token
      const data = await response.json();
      const accessToken = data.accessToken;

      // Store access token in local storage or session storage
      localStorage.setItem('accessToken', accessToken);

      // Clear form data and error
      setFormData({ email: '', password: '' });
      setError('');
      window.location.href = '/';
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: '0 auto' }}>
  <div style={{ marginBottom: '10px' }}>
    <input 
      type="email" 
      name="email" 
      value={formData.email} 
      onChange={handleChange} 
      placeholder="Email" 
      style={{ 
        width: '100%', 
        padding: '10px', 
        borderRadius: '5px', 
        border: '1px solid #ccc' 
      }} 
      required 
    />
  </div>
  <div style={{ marginBottom: '10px' }}>
    <input 
      type="password" 
      name="password" 
      value={formData.password} 
      onChange={handleChange} 
      placeholder="Password" 
      style={{ 
        width: '100%', 
        padding: '10px', 
        borderRadius: '5px', 
        border: '1px solid #ccc' 
      }} 
      required 
    />
  </div>
  <button 
    type="submit" 
    style={{ 
      width: '100%', 
      padding: '10px', 
      borderRadius: '5px', 
      border: 'none', 
      backgroundColor: '#007bff', 
      color: '#fff', 
      cursor: 'pointer' 
    }}
  >
    Login
  </button>
</form>
{error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
    </div>
  );
};

export default LoginForm;
