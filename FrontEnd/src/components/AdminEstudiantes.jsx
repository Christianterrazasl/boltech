import React, { useState, useEffect } from 'react';

const Estudiantes = () => {
  const [estudiantes, setEstudiantes] = useState([
    { registro: "E0001", nombre: "Carlos Ruiz", correo: "carlos1@uni.edu", contrasena: "3328Q" },
    { registro: "E0002", nombre: "María Gómez", correo: "maría2@uni.edu", contrasena: "7798B" },
    { registro: "E0003", nombre: "Pedro Sánchez", correo: "pedro3@uni.edu", contrasena: "4224J" },
    { registro: "E0004", nombre: "Lucía Rojas", correo: "lucía4@uni.edu", contrasena: "9012W" },
    { registro: "E0005", nombre: "José Ramírez", correo: "josé5@uni.edu", contrasena: "7956N" },
    { registro: "E0006", nombre: "Ana Mendoza", correo: "ana6@uni.edu", contrasena: "3787A" },
    { registro: "E0007", nombre: "Jorge Vargas", correo: "jorge7@uni.edu", contrasena: "3579L" },
    { registro: "E0008", nombre: "Daniela Soto", correo: "daniela8@uni.edu", contrasena: "7790H" },
    { registro: "E0009", nombre: "Luis Morales", correo: "luis9@uni.edu", contrasena: "1812X" },
    { registro: "E0010", nombre: "Camila Torres", correo: "camila10@uni.edu", contrasena: "9288C" },
    { registro: "E0011", nombre: "Diego Herrera", correo: "diego11@uni.edu", contrasena: "7974H" },
    { registro: "E0012", nombre: "Valeria Díaz", correo: "valeria12@uni.edu", contrasena: "1100I" },
    { registro: "E0013", nombre: "Martín Silva", correo: "martín13@uni.edu", contrasena: "8547F" },
    { registro: "E0014", nombre: "Paula Cordero", correo: "paula14@uni.edu", contrasena: "3068H" },
    { registro: "E0015", nombre: "Andrés Reyes", correo: "andrés15@uni.edu", contrasena: "9099A" },
    { registro: "E0016", nombre: "Florencia Navarro", correo: "florencia16@uni.edu", contrasena: "5556E" },
    { registro: "E0017", nombre: "Matías López", correo: "matías17@uni.edu", contrasena: "6354R" },
    { registro: "E0018", nombre: "Julieta Romero", correo: "julieta18@uni.edu", contrasena: "1037K" },
    { registro: "E0019", nombre: "Bruno Castillo", correo: "bruno19@uni.edu", contrasena: "7577H" },
    { registro: "E0020", nombre: "Melina Ibáñez", correo: "melina20@uni.edu", contrasena: "9320X" },
    { registro: "E0021", nombre: "Federico Tapia", correo: "federico21@uni.edu", contrasena: "8329O" },
    { registro: "E0022", nombre: "Milagros Rivas", correo: "milagros22@uni.edu", contrasena: "4299R" },
    { registro: "E0023", nombre: "Ignacio Aguirre", correo: "ignacio23@uni.edu", contrasena: "9146O" },
    { registro: "E0024", nombre: "Abril Paredes", correo: "abril24@uni.edu", contrasena: "7941B" },
    { registro: "E0025", nombre: "Franco Guzmán", correo: "franco25@uni.edu", contrasena: "3431O" },
    { registro: "E0026", nombre: "Micaela Ortega", correo: "micaela26@uni.edu", contrasena: "9828O" },
    { registro: "E0027", nombre: "Simón Vaca", correo: "simón27@uni.edu", contrasena: "1400Z" },
    { registro: "E0028", nombre: "Giuliana Salas", correo: "giuliana28@uni.edu", contrasena: "6030V" },
    { registro: "E0029", nombre: "Kevin Ayala", correo: "kevin29@uni.edu", contrasena: "9735X" },
    { registro: "E0030", nombre: "Agustina Ochoa", correo: "agustina30@uni.edu", contrasena: "2163E" }
  ]);

  const [estudianteEditando, setEstudianteEditando] = useState(null);

  const [formData, setFormData] = useState({
    registro: '',
    nombre: '',
    correo: '',
    contrasena: ''
  });

  useEffect(() => {
    if (estudianteEditando) {
      setFormData(estudianteEditando);
    } else {
      setFormData({ registro: '', nombre: '', correo: '', contrasena: '' });
    }
  }, [estudianteEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const guardarEstudiante = (nuevo) => {
    if (estudianteEditando) {
      setEstudiantes(estudiantes.map(e => e.registro === nuevo.registro ? nuevo : e));
      setEstudianteEditando(null);
    } else {
      setEstudiantes([...estudiantes, nuevo]);
    }
  };

  const eliminarEstudiante = (registro) => {
    setEstudiantes(estudiantes.filter(e => e.registro !== registro));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    guardarEstudiante(formData);
    setFormData({ registro: '', nombre: '', correo: '', contrasena: '' });
  };

  return (
    <div id="estudiantes" className="detalles">
      <div className="formulario">
        <div className="formulario-titulo">
          <h2>{estudianteEditando ? 'Editar Estudiante' : 'Crear Estudiante'}</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="contenedor-input-formulario">
            <label htmlFor="registro">Registro</label>
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
            <label htmlFor="nombre">Nombre Completo:</label>
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
            <label htmlFor="correo">Correo:</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contenedor-input-formulario">
            <label htmlFor="contrasena">Contraseña:</label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              value={formData.contrasena}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contenedor-input-formulario">
            <button type="submit">Guardar</button>
          </div>
        </form>
      </div>

      <div className="historial-estudiantes">
        <div className="historial-titulo-estudiantes">
          <h2>Historial de Estudiantes</h2>
        </div>
        <table>
          <thead>
            <tr>
              <td>Registro</td>
              <td>Nombre Completo</td>
              <td>Correo</td>
              <td>Contraseña</td>
              <td>Acciones</td>
            </tr>
          </thead>
          <tbody>
            {estudiantes.map((estudiante) => (
              <tr key={estudiante.registro}>
                <td>{estudiante.registro}</td>
                <td>{estudiante.nombre}</td>
                <td>{estudiante.correo}</td>
                <td>{estudiante.contrasena}</td>
                <td>
                  <button
                    className="btn-editar"
                    onClick={() => setEstudianteEditando(estudiante)}
                  >
                    <ion-icon name="pencil-outline"></ion-icon>
                  </button>
                  <button
                    className="btn-eliminar"
                    onClick={() => eliminarEstudiante(estudiante.registro)}
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

export default Estudiantes;
