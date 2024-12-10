import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuth = () => {
  const { authState, setAuthState } = useContext(AuthContext);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setAuthState({ user: storedUser, isAuthenticated: true });
    }
  }, [setAuthState]);

  const login = (user) => {
    setAuthState({ user, isAuthenticated: true });
    localStorage.setItem('user', JSON.stringify(user));  // Guardar en localStorage
  };

  const logout = () => {
    setAuthState({ user: null, isAuthenticated: false });
    localStorage.removeItem('user');  // Eliminar de localStorage
  };

  return { authState, login, logout };
};