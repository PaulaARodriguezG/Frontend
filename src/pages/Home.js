import React, { useState, useEffect } from 'react';
import { fetchSalas } from '../services/salaService';
import { fetchReservas } from '../services/reservaService';
import { Link } from 'react-router-dom';

const SalasDisponibles = ({ salas }) => (
  <section id="home" className="mb-8">
    <h1 className="text-2xl font-bold mb-4">Salas Disponibles</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {salas.map((sala) => (
        <div className="card p-4 bg-white shadow-md rounded-lg" key={sala.id}>
          <img
            src="./css/images/Salas.webp"
            alt={sala.nombre}
            className="w-full h-48 object-cover mb-4 rounded-lg"
          />
          <h2 className="text-lg font-semibold">{sala.nombre}</h2>
          <p>Capacidad: {sala.capacidad}</p>
          <p>Ubicación: {sala.ubicacion}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600">
            Reservar Sala
          </button>
        </div>
      ))}
    </div>
    <Link to="/salas" className="text-blue-500 underline mt-4 inline-block">
      Ver todas las salas
    </Link>
  </section>
);

const ReservasActuales = ({ reservas }) => (
  <section id="reservas" className="mb-8">
    <h1 className="text-2xl font-bold mb-4">Tus Reservas</h1>
    <div className="overflow-x-auto">
      {reservas.length > 0 ? (
        <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Sala</th>
              <th className="px-4 py-2 border">Fecha</th>
              <th className="px-4 py-2 border">Hora</th>
              <th className="px-4 py-2 border">Estado</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva) => (
              <tr key={reserva.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{reserva.id}</td>
                <td className="px-4 py-2">{reserva.sala}</td>
                <td className="px-4 py-2">{reserva.fecha}</td>
                <td className="px-4 py-2">
                  {reserva.horaInicio} - {reserva.horaFin}
                </td>
                <td className="px-4 py-2">{reserva.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No tienes reservas activas.</p>
      )}
    </div>
    <Link to="/reservas" className="text-blue-500 underline mt-4 inline-block">
      Ver todas las reservas
    </Link>
  </section>
);

const Home = () => {
  const [salas, setSalas] = useState([]);
  const [reservas, setReservas] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const [salasData, reservasData] = await Promise.all([
          fetchSalas(),
          fetchReservas(),
        ]);
        setSalas(salasData);
        setReservas(reservasData);
      } catch (error) {
        console.error('Error al cargar datos:', error);
        setError('Hubo un problema al cargar los datos. Por favor, intenta nuevamente.');
      } finally {
        setCargando(false);
      }
    };

    obtenerDatos();
  }, []);

  if (cargando) return <p>Cargando...</p>;

  return (
    <div className="container mx-auto px-4">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <SalasDisponibles salas={salas} />
      <ReservasActuales reservas={reservas} />
    </div>
  );
};

export default Home;