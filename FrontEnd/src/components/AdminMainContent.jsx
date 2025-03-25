import React from 'react';
import Inicio from './AdminInicio';
import Docentes from './AdminDocentes';
import Carreras from './AdminCarreras';
import Estudiantes from './AdminEstudiantes';

const MainContent = ({
  activeSection,
  isMenuOpen,
  toggleMenu,
  docentes,
  carreras,
  estudiantes,
  docenteEditando,
  carreraEditando,
  estudianteEditando,
  guardarDocente,
  guardarCarrera,
  guardarEstudiante,
  eliminarDocente,
  eliminarCarrera,
  eliminarEstudiante,
  setDocenteEditando,
  setCarreraEditando,
  setEstudianteEditando,
}) => {
  return (
    <div className={`principal ${isMenuOpen ? 'active' : ''}`}>
      <div className="menu-hamburguesa">
        <div className="toggle" id="toggle" onClick={toggleMenu}>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
      </div>
      {activeSection === 'inicio' && <Inicio />}
      {activeSection === 'docentes' && (
        <Docentes
          docentes={docentes}
          docenteEditando={docenteEditando}
          guardarDocente={guardarDocente}
          eliminarDocente={eliminarDocente}
          setDocenteEditando={setDocenteEditando}
        />
      )}
      {activeSection === 'carreras'  && (
        <Carreras
          carreras={carreras}
          carreraEditando={carreraEditando}
          guardarCarrera={guardarCarrera}
          eliminarCarrera={eliminarCarrera}
          setCarreraEditando={setCarreraEditando}
        />
      )}
      {activeSection === 'estudiantes' && (
        <Estudiantes
          estudiantes={estudiantes}
          estudianteEditando={estudianteEditando}
          guardarEstudiante={guardarEstudiante}
          eliminarEstudiante={eliminarEstudiante}
          setEstudianteEditando={setEstudianteEditando}
        />
      )}
    </div>
  );
};

export default MainContent;