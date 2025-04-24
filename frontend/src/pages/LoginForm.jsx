import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import { Icon } from '@iconify/react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch("http://localhost:5001/civix-4f64a/us-central1/api/login", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Login failed');
      }
      
      localStorage.setItem('authToken', result.token);
      localStorage.setItem('userData', JSON.stringify(result.user));
      
      console.log("Logged in successfully:", result);
      
      navigate('/');
    } catch (error) {
      console.error("Error logging in:", error);
      setError(error.message || 'Failed to login. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="form-box login">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          {error && <div className="error-message">{error}</div>}
          <div className="input-box">
            <input 
              type="email" 
              placeholder="Email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Icon icon="mdi:email" />
          </div>
          <div className="input-box">
            <input 
              type="password" 
              placeholder="Password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Icon icon="mdi:lock" />
          </div>
          <div className="forgot-link">
            <a href="#">Forgot password?</a>
          </div>
          <button 
            type="submit" 
            className="btn"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;