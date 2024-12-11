import React from 'react';
import { NavLink } from 'react-router-dom';
import favicon from '../assets/images/favicon.svg';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={favicon} alt="Logo de la App" className="h-8 w-8 mr-4" />
          <NavLink to="/" className="text-xl font-bold hover:underline">
            Sistema de Reserva
          </NavLink>
        </div>
        <button
          className="sm:hidden block text-white focus:outline-none"
          aria-label="Abrir menú de navegación"
        >
          ☰
        </button>
        <div className="hidden sm:flex space-x-4">
          <NavLink to="/salas" className="hover:underline">
            Salas
          </NavLink>
          <NavLink to="/reservas" className="hover:underline">
            Reservas
          </NavLink>
          <NavLink to="/perfil" className="hover:underline">
            Perfil
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;