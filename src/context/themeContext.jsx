// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';
import { AuthContext } from './authContext.jsx';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const {loggedIn}=useContext(AuthContext);

  const toggleTheme = () => {
    if(loggedIn)
      {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
      }
      else{
        window.alert("Please login to change theme");
      }
    
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
