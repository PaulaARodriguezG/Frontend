import React from 'react';
import { NavLink } from 'react-router-dom';
import favicon from '../assets/images/favicon.svg'

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <img src={favicon} alt='Logo de la App'/>
      <nav className="flex flex-wrap justify-between items-center">
        <NavLink to="/" className="text-xl font-bold hover:underline">Sistema de Reserva</NavLink>
        <button className="sm:hidden block text-white">☰</button>
        <div className="hidden sm:flex">
          <NavLink to="/salas" className="px-4">Salas</NavLink>
          <NavLink to="/reservas" className="px-4">Reservas</NavLink>
          <NavLink to="/perfil" className="px-4">Perfil</NavLink>
  </div>
</nav>
    </header>
  );
};

export default Header;