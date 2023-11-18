import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
      // Check if the user is logged in from local storage
      const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
      return storedIsLoggedIn ? JSON.parse(storedIsLoggedIn) : false;
    });
  
    useEffect(() => {
      // Update local storage when isLoggedIn value changes
      localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);
  
    return (
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {children}
      </AuthContext.Provider>
    );
  };