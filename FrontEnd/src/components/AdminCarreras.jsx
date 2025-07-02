import React, { useState, useEffect } from 'react';

const Carreras = () => {
  const [carreras, setCarreras] = useState([
    { registro: "C001", nombre: "Ingeniería de Sistemas", descripcion: "Programa de ingeniería de sistemas" },
    { registro: "C002", nombre: "Derecho", descripcion: "Programa de derecho" },
    { registro: "C003", nombre: "Medicina", descripcion: "Programa de medicina" },
    { registro: "C004", nombre: "Arquitectura", descripcion: "Programa de arquitectura" },
    { registro: "C005", nombre: "Contaduría Pública", descripcion: "Programa de contaduría pública" },
    { registro: "C006", nombre: "Administración de Empresas", descripcion: "Programa de administración de empresas" },
    { registro: "C007", nombre: "Psicología", descripcion: "Programa de psicología" },
    { registro: "C008", nombre: "Ingeniería Civil", descripcion: "Programa de ingeniería civil" },
    { registro: "C009", nombre: "Diseño Gráfico", descripcion: "Programa de diseño gráfico" },
    { registro: "C010", nombre: "Enfermería", descripcion: "Programa de enfermería" },
    { registro: "C011", nombre: "Ingeniería Electrónica", descripcion: "Programa de ingeniería electrónica" },
    { registro: "C012", nombre: "Comunicación Social", descripcion: "Programa de comunicación social" },
    { registro: "C013", nombre: "Educación Inicial", descripcion: "Programa de educación inicial" },
    { registro: "C014", nombre: "Ingeniería Industrial", descripcion: "Programa de ingeniería industrial" },
    { registro: "C015", nombre: "Biología", descripcion: "Programa de biología" },
    { registro: "C016", nombre: "Economía", descripcion: "Programa de economía" },
    { registro: "C017", nombre: "Física", descripcion: "Programa de física" },
    { registro: "C018", nombre: "Matemáticas", descripcion: "Programa de matemáticas" },
    { registro: "C019", nombre: "Relaciones Internacionales", descripcion: "Programa de relaciones internacionales" },
    { registro: "C020", nombre: "Marketing", descripcion: "Programa de marketing" }
  ]);

  const [carreraEditando, setCarreraEditando] = useState(null);

  const [formData, setFormData] = useState({
    registro: '',
    nombre: '',
    descripcion: ''
  });

  useEffect(() => {
    if (carreraEditando) {
      setFormData(carreraEditando);
    } else {
      setFormData({ registro: '', nombre: '', descripcion: '' });
    }
  }, [carreraEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const guardarCarrera = (nuevaCarrera) => {
    if (carreraEditando) {
      setCarreras(carreras.map(c => c.registro === nuevaCarrera.registro ? nuevaCarrera : c));
      setCarreraEditando(null);
    } else {
      setCarreras([...carreras, nuevaCarrera]);
    }
  };

  const eliminarCarrera = (registro) => {
    setCarreras(carreras.filter(c => c.registro !== registro));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    guardarCarrera(formData);
    setFormData({ registro: '', nombre: '', descripcion: '' });
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
            <label htmlFor="descripcion">Descripción:</label>
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
              <td>Descripción</td>
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
