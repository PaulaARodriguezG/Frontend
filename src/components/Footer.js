import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-blue-500 text-white text-center p-4">
      <p>&copy; {currentYear} Sistema de Reservación de Salas. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
