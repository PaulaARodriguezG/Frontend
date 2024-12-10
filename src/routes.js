import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Salas from './pages/Salas';
import Reservas from './pages/Reservas';
import Perfil from './pages/Perfil';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/salas" element={<Salas />} />
      <Route path="/reservas" element={<Reservas />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  );
};

export default AppRoutes;