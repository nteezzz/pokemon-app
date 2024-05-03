// ThemeContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username,setUsername]=useState('');


  return (
    <AuthContext.Provider value={{loggedIn, setLoggedIn,username,setUsername}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
