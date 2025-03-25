import React, { useState, useEffect } from 'react';

const Carreras = ({
  carreras,
  carreraEditando,
  guardarCarrera,
  eliminarCarrera,
  setCarreraEditando,
}) => {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
  });

 
  useEffect(() => {
    if (carreraEditando) {
      setFormData(carreraEditando);
    } else {
      setFormData({ registro: '' , nombre: '', descripcion: '' });
    }
  }, [carreraEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    guardarCarrera(formData); 
    setFormData({ registro: '' , nombre: '', descripcion: ''}); 
  };

  return (
    <div id="carreras" className="detalles">
      <div className="formulario">
        <div className="formulario-titulo">
          <h2>{carreraEditando ? 'Editar Carrera' : 'Crear Carrera'}</h2>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="contenedor-input-formulario">
            <label htmlFor="registro">Registro:</label>
            <input
              type="text"
              id="registro"
              name="registro"
              value={formData.registro}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contenedor-input-formulario">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contenedor-input-formulario">
            <label htmlFor="descipcion">Descripción:</label>
            <input
              type="text"
              id="descripcion"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contenedor-input-formulario">
            <button type="submit">Guardar</button>
          </div>
        </form>
      </div>
      <div className="historial-carreras">
        <div className="historial-titulo-carreras">
          <h2>Historial de Carreras</h2>
        </div>
        <table>
          <thead>
            <tr>
              <td>Registro</td>
              <td>Nombre</td>
              <td>Descripcción</td>
              <td>Acciones</td>
            </tr>
          </thead>
          <tbody>
            {carreras.map((carrera) => (
              <tr key={carrera.registro}>
                <td>{carrera.registro}</td>
                <td>{carrera.nombre}</td>
                <td>{carrera.descripcion}</td>
                <td>
                  <button
                    className="btn-editar"
                    onClick={() => setCarreraEditando(carrera)}
                  >
                    <ion-icon name="pencil-outline"></ion-icon>
                  </button>
                  <button
                    className="btn-eliminar"
                    onClick={() => eliminarCarrera(carrera.registro)}
                  >
                    <ion-icon name="trash-outline"></ion-icon>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Carreras;