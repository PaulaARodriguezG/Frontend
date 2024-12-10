import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Obtener todas las salas
export const getSalas = async () => {
  try {
    const response = await axios.get(`${API_URL}/salas`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las salas:', error);
    throw error;
  }
};

// Crear una nueva sala
export const crearSala = async (nuevaSala) => {
  try {
    const response = await axios.post(`${API_URL}/salas`, nuevaSala);
    return response.data;
  } catch (error) {
    console.error('Error al crear la sala:', error);
    throw error;
  }
};

// Actualizar una sala
export const actualizarSala = async (id, salaActualizada) => {
  try {
    const response = await axios.put(`${API_URL}/salas/${id}`, salaActualizada);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar la sala:', error);
    throw error;
  }
};

// Eliminar una sala
export const eliminarSala = async (id) => {
  try {
    await axios.delete(`${API_URL}/salas/${id}`);
    return true;
  } catch (error) {
    console.error('Error al eliminar la sala:', error);
    throw error;
  }
};