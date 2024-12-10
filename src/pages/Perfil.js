import React, { useState, useEffect } from 'react';
import { getUsuarioPorId, actualizarUsuario } from '../services/usuarioService';
import Modal from './Modal';

const Perfil = ({ usuarioId }) => {
  const [usuario, setUsuario] = useState(null);
  const [editando, setEditando] = useState(false);
  const [nuevosDatos, setNuevosDatos] = useState({
    nombre: '',
    correo: '',
    rol: '',
  });
  const [cargando, setCargando] = useState(true);
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const cargarUsuario = async () => {
      try {
        const usuarioActual = await getUsuarioPorId(usuarioId);
        setUsuario(usuarioActual);
        setNuevosDatos(usuarioActual);
        setCargando(false);
      } catch (error) {
        console.error('Error al cargar el usuario:', error);
        setError('No se pudo cargar el perfil. Intenta más tarde.');
        setCargando(false);
      }
    };

    cargarUsuario();
  }, [usuarioId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevosDatos({
      ...nuevosDatos,
      [name]: value,
    });
  };

  const handleGuardarCambios = async () => {
    setGuardando(true);
    try {
      const usuarioActualizado = await actualizarUsuario(usuario.id, nuevosDatos);
      setUsuario(usuarioActualizado);
      setEditando(false);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
      setError('No se pudo guardar los cambios. Intenta más tarde.');
    } finally {
      setGuardando(false);
    }
  };

  if (cargando) return <p>Cargando...</p>;

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      {error && <p className="text-red-500">{error}</p>}
      {usuario && (
        <div>
          <div className="mb-4">
            <label htmlFor="nombre" className="block">Nombre:</label>
            {editando ? (
              <input
                type="text"
                name="nombre"
                id="nombre"
                value={nuevosDatos.nombre}
                onChange={handleChange}
                className="border p-2 rounded"
              />
            ) : (
              <p>{usuario.nombre}</p>
            )}
          </div>
          
          <div className="mb-4">
            <label htmlFor="correo" className="block">Correo:</label>
            {editando ? (
              <input
                type="email"
                name="correo"
                id="correo"
                value={nuevosDatos.correo}
                onChange={handleChange}
                className="border p-2 rounded"
              />
            ) : (
              <p>{usuario.correo}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="rol" className="block">Rol:</label>
            {editando ? (
              <input
                type="text"
                name="rol"
                id="rol"
                value={nuevosDatos.rol}
                onChange={handleChange}
                className="border p-2 rounded"
              />
            ) : (
              <p>{usuario.rol}</p>
            )}
          </div>

          {editando ? (
            <>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
              >
                Guardar Cambios
              </button>
              <button
                onClick={() => setEditando(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg mt-4 ml-2"
              >
                Cancelar
              </button>
            </>
          ) : (
            <button
              onClick={() => setEditando(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
            >
              Editar
            </button>
          )}
        </div>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleGuardarCambios}
        title="Confirmar Cambios"
        content={`¿Estás seguro de que deseas guardar los cambios realizados?`}
        confirmText={guardando ? "Guardando..." : "Guardar"}
        cancelText="Cancelar"
        isConfirmDisabled={guardando}
      />
    </div>
  );
};

export default Perfil;