import { useParams } from 'react-router-dom';
import '../styles/materia.css';
import "../styles/responsive.css";

const tareas = [
  'Tarea 1', 'Tarea 2', 'Tarea 3',
  'Examen 1', 'Examen 2', 'Examen Final',
  'Proyecto Final'
];

const MateriaPage = () => {
  const { nombre } = useParams(); 

  return (
    <div className="materia-page">
      <h2 className="materia-title">{nombre.toUpperCase()}</h2>
      <div className="tareas-container">
        {tareas.map((tarea, index) => (
          <div key={index} className="tarea-burbuja">
            {tarea}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MateriaPage;
