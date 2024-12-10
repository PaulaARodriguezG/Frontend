
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL; 

// Obtener todos los usuarios
export const getUsuarios = async () => {
  try {
    const response = await axios.get(`${API_URL}/usuarios`);
    return response.data; // Supone que la API devuelve un arreglo de usuarios
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    throw error;
  }
};

// Obtener un usuario por ID
export const getUsuarioPorId = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/usuarios/${id}`);
    return response.data; // Usuario específico
  } catch (error) {
    console.error(`Error al obtener el usuario con ID ${id}:`, error);
    throw error;
  }
};

// Registrar un nuevo usuario
export const registrarUsuario = async (nuevoUsuario) => {
  try {
    const response = await axios.post(`${API_URL}/usuarios`, nuevoUsuario);
    return response.data; // Usuario creado con su ID asignado por el backend
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    throw error;
  }
};

// Actualizar un usuario existente
export const actualizarUsuario = async (id, nuevosDatos) => {
  try {
    const response = await axios.put(`${API_URL}/usuarios/${id}`, nuevosDatos);
    return response.data; // Usuario actualizado
  } catch (error) {
    console.error(`Error al actualizar el usuario con ID ${id}:`, error);
    throw error;
  }
};

// Eliminar un usuario
export const eliminarUsuario = async (id) => {
  try {
    await axios.delete(`${API_URL}/usuarios/${id}`);
    return true; // Devuelve true si se elimina correctamente
  } catch (error) {
    console.error(`Error al eliminar el usuario con ID ${id}:`, error);
    throw error;
  }
};