import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/authContext';

export const LogComponent= () => {
  const {loggedIn, setLoggedIn,username,setUsername}=useContext(AuthContext);
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username.trim() === '') {
      setError('Please enter your name.');
    } else {
      setLoggedIn(true);
      setError('');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
  };

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };
  

  return (
    <div className="login-container">
    {!loggedIn ? (
      <div className="login-form">
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={username} 
          onChange={handleInputChange} 
          className="input-field"
        />
        <button onClick={handleLogin} className="login-button">Login</button>
        {error && <p className="error-message">{error}</p>}
      </div>
    ) : (
      <div className="user-greeting">
        Hi, {username}
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    )}
  </div>
  );
};


