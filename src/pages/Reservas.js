import React, { useState, useEffect } from 'react';
import { getReservas, crearReserva, cancelarReserva } from '../services/reservaService';
import Modal from './Modal';

const Reservas = () => {
  const [reservas, setReservas] = useState([]);
  const [nuevaReserva, setNuevaReserva] = useState({
    salaId: '',
    fecha: '',
    horaInicio: '',
    horaFin: '',
  });
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reservaACancelar, setReservaACancelar] = useState(null);

  useEffect(() => {
    const cargarReservas = async () => {
      setCargando(true);
      try {
        const data = await getReservas();
        setReservas(data);
      } catch (error) {
        console.error('Error al cargar las reservas:', error);
        setError('Hubo un problema al cargar las reservas.');
      } finally {
        setCargando(false);
      }
    };

    cargarReservas();
  }, []);

  const handleCrearReserva = async () => {
    if (!nuevaReserva.salaId || !nuevaReserva.fecha || !nuevaReserva.horaInicio || !nuevaReserva.horaFin) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    try {
      const reservaCreada = await crearReserva(nuevaReserva);
      setReservas((prevReservas) => [...prevReservas, reservaCreada]);
      setNuevaReserva({ salaId: '', fecha: '', horaInicio: '', horaFin: '' });
      setError(null);
    } catch (error) {
      console.error('Error al crear la reserva:', error);
      setError('Hubo un problema al crear la reserva.');
    }
  };

  const handleCancelarReserva = async () => {
    try {
      await cancelarReserva(reservaACancelar.id);
      setReservas((prevReservas) => prevReservas.filter((reserva) => reserva.id !== reservaACancelar.id));
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error al cancelar la reserva:', error);
      setError('Hubo un problema al cancelar la reserva.');
    }
  };

  if (cargando) return <p>Cargando reservas...</p>;

  return (
    <div>
      <h1>Reservas</h1>

      {error && <p className="text-red-500">{error}</p>}

      <ul>
        {reservas.length > 0 ? (
          reservas.map((reserva) => (
            <li key={reserva.id} className="mb-4 p-4 border rounded">
              <p><strong>ID Reserva:</strong> {reserva.id}</p>
              <p><strong>Sala:</strong> {reserva.sala.nombre}</p>
              <p><strong>Fecha:</strong> {reserva.fecha}</p>
              <p><strong>Hora:</strong> {reserva.horaInicio} - {reserva.horaFin}</p>
              <button
                onClick={() => {
                  setReservaACancelar(reserva);
                  setIsModalOpen(true);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2"
              >
                Cancelar
              </button>
            </li>
          ))
        ) : (
          <p>No tienes reservas.</p>
        )}
      </ul>

      <div>
        <h2>Crear Reserva</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="ID Sala"
            value={nuevaReserva.salaId}
            onChange={(e) => setNuevaReserva({ ...nuevaReserva, salaId: e.target.value })}
            className="border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="date"
            value={nuevaReserva.fecha}
            onChange={(e) => setNuevaReserva({ ...nuevaReserva, fecha: e.target.value })}
            className="border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="time"
            value={nuevaReserva.horaInicio}
            onChange={(e) => setNuevaReserva({ ...nuevaReserva, horaInicio: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="time"
            value={nuevaReserva.horaFin}
            onChange={(e) => setNuevaReserva({ ...nuevaReserva, horaFin: e.target.value })}
            className="border p-2 rounded"
          />
        </div>
        <button onClick={handleCrearReserva} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Reservar
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleCancelarReserva}
        title="Confirmar Cancelación"
        content={`¿Estás seguro de que deseas cancelar la reserva para la sala "${reservaACancelar?.sala.nombre}"?`}
        confirmText="Cancelar Reserva"
        cancelText="Cerrar"
      />
    </div>
  );
};

export default Reservas;