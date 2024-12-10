import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const storedAuthState = storedUser ? { user: storedUser, isAuthenticated: true } : { user: null, isAuthenticated: false };

  const [authState, setAuthState] = useState(storedAuthState);

  useEffect(() => {
    if (authState.isAuthenticated) {
      localStorage.setItem('user', JSON.stringify(authState.user));
    } else {
      localStorage.removeItem('user');
    }
  }, [authState]);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;