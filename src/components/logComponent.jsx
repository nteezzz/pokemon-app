import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/authContext';
import {useSelector, useDispatch} from 'react-redux'
import {login,logout, setUsername} from '../features/authSlice.jsx'

export const LogComponent= () => {
  //useing context API
  //const {loggedIn, setLoggedIn,username,setUsername}=useContext(AuthContext);
  const loggedInRedux= useSelector((state)=>state.auth.loggedIn);
  const usernameRedux= useSelector((state)=>state.auth.username);
  const dispatch= useDispatch();
  
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  
  const handleLogin = () => {
    if (inputValue.trim() === '') {
      setError('Please enter your name.');
    } else {
      dispatch(login());
      dispatch(setUsername(inputValue));
      setError('');
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    setInputValue('');
    dispatch(setUsername(''));
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  

  return (
    <div className="login-container">
    {!loggedInRedux ? (
      <div className="login-form">
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={inputValue} 
          onChange={handleInputChange} 
          className="input-field"
        />
        <button onClick={handleLogin} className="login-button">Login</button>
        {error && <p className="error-message">{error}</p>}
      </div>
    ) : (
      <div className="user-greeting">
        Hi, {usernameRedux}
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    )}
  </div>
  );
};


