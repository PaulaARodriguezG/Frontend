import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
console.log('API_URL:', API_URL);

// Obtener todas las reservas
export const getReservas = async () => {
  try {
    const response = await axios.get(`${API_URL}/reservas`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las reservas:', error);
    throw error;
  }
};

// Crear una nueva reserva
export const crearReserva = async (nuevaReserva) => {
  try {
    const response = await axios.post(`${API_URL}/reservas`, nuevaReserva);
    return response.data;
  } catch (error) {
    console.error('Error al crear la reserva:', error);
    throw error;
  }
};

// Cancelar una reserva
export const cancelarReserva = async (id) => {
  try {
    await axios.delete(`${API_URL}/reservas/${id}`);
    return true;
  } catch (error) {
    console.error('Error al cancelar la reserva:', error);
    throw error;
  }
};