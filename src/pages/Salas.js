import React, { useState, useEffect } from 'react';
import { getSalas, crearSala, eliminarSala } from '../services/salaService';
import Modal from './Modal';

const Salas = () => {
  const [salas, setSalas] = useState([]);
  const [nuevaSala, setNuevaSala] = useState({
    nombre: '',
    capacidad: '',
    ubicacion: '',
    estado: 'Disponible',
  });
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [salaAEliminar, setSalaAEliminar] = useState(null);

  useEffect(() => {
    const cargarSalas = async () => {
      setCargando(true);
      try {
        const data = await getSalas();
        setSalas(data);
      } catch (error) {
        console.error('Error al cargar las salas:', error);
        setError('Hubo un problema al cargar las salas.');
      } finally {
        setCargando(false);
      }
    };

    cargarSalas();
  }, []);

  const handleAgregarSala = async () => {
    if (!nuevaSala.nombre || !nuevaSala.capacidad || !nuevaSala.ubicacion) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    try {
      const salaCreada = await crearSala(nuevaSala);
      setSalas((prevSalas) => [...prevSalas, salaCreada]);
      setNuevaSala({ nombre: '', capacidad: '', ubicacion: '', estado: 'Disponible' });
      setError(null);
    } catch (error) {
      console.error('Error al agregar la sala:', error);
      setError('Hubo un problema al agregar la sala.');
    }
  };

  const handleEliminarSala = async () => {
    try {
      await eliminarSala(salaAEliminar.id);
      setSalas((prevSalas) => prevSalas.filter((sala) => sala.id !== salaAEliminar.id));
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error al eliminar la sala:', error);
      setError('Hubo un problema al eliminar la sala.');
    }
  };

  if (cargando) return <p>Cargando salas...</p>;

  return (
    <div>
      <h1>Gestión de Salas</h1>

      {error && <p className="text-red-500">{error}</p>}

      <div>
        <h2>Agregar Sala</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={nuevaSala.nombre}
          onChange={(e) => setNuevaSala({ ...nuevaSala, nombre: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Capacidad"
          value={nuevaSala.capacidad}
          onChange={(e) => setNuevaSala({ ...nuevaSala, capacidad: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Ubicación"
          value={nuevaSala.ubicacion}
          onChange={(e) => setNuevaSala({ ...nuevaSala, ubicacion: e.target.value })}
          className="border p-2 rounded"
        />
        <button onClick={handleAgregarSala} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Agregar Sala
        </button>
      </div>

      <ul>
        {salas.map((sala) => (
          <li key={sala.id} className="mb-4 p-4 border rounded">
            <p><strong>Nombre:</strong> {sala.nombre}</p>
            <p><strong>Capacidad:</strong> {sala.capacidad}</p>
            <p><strong>Ubicación:</strong> {sala.ubicacion}</p>
            <p><strong>Estado:</strong> {sala.estado}</p>
            <button
              onClick={() => {
                setSalaAEliminar(sala);
                setIsModalOpen(true);
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleEliminarSala}
        title="Confirmación de Eliminación"
        content={`¿Estás seguro de que deseas eliminar la sala "${salaAEliminar?.nombre}"?`}
        confirmText="Eliminar"
        cancelText="Cancelar"
      />
    </div>
  );
};

export default Salas;