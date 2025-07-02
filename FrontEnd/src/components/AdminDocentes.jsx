import React, { useState, useEffect } from 'react';

const Docentes = () => {
  const [docentes, setDocentes] = useState([
  { registro: "D001", nombre: "Ana López", correo: "ana1@uni.edu", contrasena: "4486N" },
  { registro: "D002", nombre: "Luis Pérez", correo: "luis2@uni.edu", contrasena: "9210V" },
  { registro: "D003", nombre: "Marta Gómez", correo: "marta3@uni.edu", contrasena: "5349S" },
  { registro: "D004", nombre: "José Rivera", correo: "josé4@uni.edu", contrasena: "9144R" },
  { registro: "D005", nombre: "Elena Vargas", correo: "elena5@uni.edu", contrasena: "3051Y" },
  { registro: "D006", nombre: "Carlos Díaz", correo: "carlos6@uni.edu", contrasena: "1630D" },
  { registro: "D007", nombre: "Laura Méndez", correo: "laura7@uni.edu", contrasena: "3482B" },
  { registro: "D008", nombre: "Juan Torres", correo: "juan8@uni.edu", contrasena: "3611T" },
  { registro: "D009", nombre: "Sofía Ramírez", correo: "sofía9@uni.edu", contrasena: "5582Q" },
  { registro: "D010", nombre: "Daniel Castro", correo: "daniel10@uni.edu", contrasena: "5218F" },
  { registro: "D011", nombre: "Valeria Ortega", correo: "valeria11@uni.edu", contrasena: "6208W" },
  { registro: "D012", nombre: "Mario Luna", correo: "mario12@uni.edu", contrasena: "3940T" },
  { registro: "D013", nombre: "Lucía Herrera", correo: "lucía13@uni.edu", contrasena: "2203V" },
  { registro: "D014", nombre: "Andrés Romero", correo: "andrés14@uni.edu", contrasena: "7629L" },
  { registro: "D015", nombre: "Isabel Guzmán", correo: "isabel15@uni.edu", contrasena: "3284C" },
  { registro: "D016", nombre: "Pedro Navarro", correo: "pedro16@uni.edu", contrasena: "4214Q" },
  { registro: "D017", nombre: "Camila Álvarez", correo: "camila17@uni.edu", contrasena: "6799T" },
  { registro: "D018", nombre: "Diego Soto", correo: "diego18@uni.edu", contrasena: "3799A" },
  { registro: "D019", nombre: "Paula Morales", correo: "paula19@uni.edu", contrasena: "4219Z" },
  { registro: "D020", nombre: "Rafael Silva", correo: "rafael20@uni.edu", contrasena: "6190M" },
  { registro: "D021", nombre: "Carla Ibáñez", correo: "carla21@uni.edu", contrasena: "5614E" },
  { registro: "D022", nombre: "Hugo Rivas", correo: "hugo22@uni.edu", contrasena: "3662L" },
  { registro: "D023", nombre: "Mariana Vera", correo: "mariana23@uni.edu", contrasena: "8377N" },
  { registro: "D024", nombre: "Javier Fuentes", correo: "javier24@uni.edu", contrasena: "7907Z" },
  { registro: "D025", nombre: "Victoria Peña", correo: "victoria25@uni.edu", contrasena: "7334S" },
  { registro: "D026", nombre: "Fernando Cordero", correo: "fernando26@uni.edu", contrasena: "1306J" },
  { registro: "D027", nombre: "Gabriela Ruiz", correo: "gabriela27@uni.edu", contrasena: "2089N" },
  { registro: "D028", nombre: "Rodrigo Blanco", correo: "rodrigo28@uni.edu", contrasena: "8941O" },
  { registro: "D029", nombre: "Natalia León", correo: "natalia29@uni.edu", contrasena: "5793L" },
  { registro: "D030", nombre: "Sebastián Lara", correo: "sebastián30@uni.edu", contrasena: "7991X" },
  { registro: "D031", nombre: "Manuela Vaca", correo: "manuela31@uni.edu", contrasena: "4313K" },
  { registro: "D032", nombre: "Cristian Lozano", correo: "cristian32@uni.edu", contrasena: "2491V" },
  { registro: "D033", nombre: "Cecilia Marquez", correo: "cecilia33@uni.edu", contrasena: "7553Y" },
  { registro: "D034", nombre: "Esteban Ramos", correo: "esteban34@uni.edu", contrasena: "9825A" },
  { registro: "D035", nombre: "Julia Herrera", correo: "julia35@uni.edu", contrasena: "8986D" },
  { registro: "D036", nombre: "Tomás Acuña", correo: "tomás36@uni.edu", contrasena: "5786K" },
  { registro: "D037", nombre: "Lorena Paredes", correo: "lorena37@uni.edu", contrasena: "4312T" },
  { registro: "D038", nombre: "Francisco Cruz", correo: "francisco38@uni.edu", contrasena: "1243Z" },
  { registro: "D039", nombre: "Renata Olmos", correo: "renata39@uni.edu", contrasena: "2957N" },
  { registro: "D040", nombre: "Bruno Aguilar", correo: "bruno40@uni.edu", contrasena: "1144H" },
  { registro: "D041", nombre: "Ivana Montes", correo: "ivana41@uni.edu", contrasena: "1718P" },
  { registro: "D042", nombre: "Álvaro Mendoza", correo: "álvaro42@uni.edu", contrasena: "9428K" },
  { registro: "D043", nombre: "Romina Salas", correo: "romina43@uni.edu", contrasena: "7538B" },
  { registro: "D044", nombre: "Matías Meza", correo: "matías44@uni.edu", contrasena: "8109R" },
  { registro: "D045", nombre: "Ariadna Calle", correo: "ariadna45@uni.edu", contrasena: "6748F" },
  { registro: "D046", nombre: "Benjamín Rocha", correo: "benjamín46@uni.edu", contrasena: "4606X" },
  { registro: "D047", nombre: "Daniela Lozano", correo: "daniela47@uni.edu", contrasena: "3145B" },
  { registro: "D048", nombre: "Nicolás Ayala", correo: "nicolás48@uni.edu", contrasena: "6367G" },
  { registro: "D049", nombre: "Alexa Carranza", correo: "alexa49@uni.edu", contrasena: "9358Z" },
  { registro: "D050", nombre: "Ernesto Céspedes", correo: "ernesto50@uni.edu", contrasena: "7892Y" },
  { registro: "D051", nombre: "Violeta Camacho", correo: "violeta51@uni.edu", contrasena: "4230N" },
  { registro: "D052", nombre: "Gustavo Roldán", correo: "gustavo52@uni.edu", contrasena: "3032R" },
  { registro: "D053", nombre: "Bárbara Hoyos", correo: "bárbara53@uni.edu", contrasena: "4758W" },
  { registro: "D054", nombre: "Axel Ríos", correo: "axel54@uni.edu", contrasena: "3657A" },
  { registro: "D055", nombre: "Julieta Castaño", correo: "julieta55@uni.edu", contrasena: "6041W" },
  { registro: "D056", nombre: "Ignacio Franco", correo: "ignacio56@uni.edu", contrasena: "7696H" },
  { registro: "D057", nombre: "Milagros Rojas", correo: "milagros57@uni.edu", contrasena: "4433E" },
  { registro: "D058", nombre: "Mauricio Pino", correo: "mauricio58@uni.edu", contrasena: "2630O" },
  { registro: "D059", nombre: "Fátima Beltrán", correo: "fátima59@uni.edu", contrasena: "4820M" },
  { registro: "D060", nombre: "Martín Cabrera", correo: "martín60@uni.edu", contrasena: "3429H" },
  { registro: "D061", nombre: "Abril Tejada", correo: "abril61@uni.edu", contrasena: "5367L" },
  { registro: "D062", nombre: "Federico Luna", correo: "federico62@uni.edu", contrasena: "3089L" },
  { registro: "D063", nombre: "Micaela Duarte", correo: "micaela63@uni.edu", contrasena: "9140G" },
  { registro: "D064", nombre: "Simón Tapia", correo: "simón64@uni.edu", contrasena: "4460E" },
  { registro: "D065", nombre: "Giuliana Nieva", correo: "giuliana65@uni.edu", contrasena: "4997J" },
  { registro: "D066", nombre: "Facundo Medina", correo: "facundo66@uni.edu", contrasena: "9316P" },
  { registro: "D067", nombre: "Melina Leiva", correo: "melina67@uni.edu", contrasena: "5652Q" },
  { registro: "D068", nombre: "Ezequiel Peña", correo: "ezequiel68@uni.edu", contrasena: "3141N" },
  { registro: "D069", nombre: "Florencia Cabrera", correo: "florencia69@uni.edu", contrasena: "6282G" },
  { registro: "D070", nombre: "Kevin Flores", correo: "kevin70@uni.edu", contrasena: "6411Y" },
  { registro: "D071", nombre: "Tamara Zúñiga", correo: "tamara71@uni.edu", contrasena: "6992G" },
  { registro: "D072", nombre: "Santiago Navarro", correo: "santiago72@uni.edu", contrasena: "7653X" },
  { registro: "D073", nombre: "Noelia Calderón", correo: "noelia73@uni.edu", contrasena: "3113Y" },
  { registro: "D074", nombre: "Luciano Peña", correo: "luciano74@uni.edu", contrasena: "3601P" },
  { registro: "D075", nombre: "Agustina Díaz", correo: "agustina75@uni.edu", contrasena: "5471I" },
  { registro: "D076", nombre: "Ramiro Rivas", correo: "ramiro76@uni.edu", contrasena: "3073Z" },
  { registro: "D077", nombre: "Camila Ochoa", correo: "camila77@uni.edu", contrasena: "8888S" },
  { registro: "D078", nombre: "Ulises Romero", correo: "ulises78@uni.edu", contrasena: "1762M" },
  { registro: "D079", nombre: "Bautista Ibarra", correo: "bautista79@uni.edu", contrasena: "3526N" },
  { registro: "D080", nombre: "Delfina Segovia", correo: "delfina80@uni.edu", contrasena: "4535J" }
]);


  const [docenteEditando, setDocenteEditando] = useState(null);

  const [formData, setFormData] = useState({
    registro: '',
    nombre: '',
    correo: '',
    contrasena: '',
  });

  useEffect(() => {
    if (docenteEditando) {
      setFormData(docenteEditando);
    } else {
      setFormData({ registro: '', nombre: '', correo: '', contrasena: '' });
    }
  }, [docenteEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const guardarDocente = (nuevo) => {
    if (docenteEditando) {
      setDocentes(docentes.map(d => d.registro === nuevo.registro ? nuevo : d));
      setDocenteEditando(null);
    } else {
      setDocentes([...docentes, nuevo]);
    }
  };

  const eliminarDocente = (registro) => {
    setDocentes(docentes.filter(d => d.registro !== registro));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    guardarDocente(formData);
    setFormData({ registro: '', nombre: '', correo: '', contrasena: '' });
  };

  return (
    <div id="docentes" className="detalles">
      <div className="formulario">
        <div className="formulario-titulo">
          <h2>{docenteEditando ? 'Editar Docente' : 'Crear Docente'}</h2>
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

      <div className="historial-docentes">
        <div className="historial-titulo-docentes">
          <h2>Historial de Docentes</h2>
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
            {docentes.map((docente) => (
              <tr key={docente.registro}>
                <td>{docente.registro}</td>
                <td>{docente.nombre}</td>
                <td>{docente.correo}</td>
                <td>{docente.contrasena}</td>
                <td>
                  <button
                    className="btn-editar"
                    onClick={() => setDocenteEditando(docente)}
                  >
                    <ion-icon name="pencil-outline"></ion-icon>
                  </button>
                  <button
                    className="btn-eliminar"
                    onClick={() => eliminarDocente(docente.registro)}
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

export default Docentes;
