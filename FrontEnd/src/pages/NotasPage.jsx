import Header from '../components/HeaderLogged';
import Footer from '../components/Footer';
import '../styles/notas.css';
import { useNavigate } from 'react-router-dom';
const materias = [
  'Álgebra',
  'Física',
  'Programación',
  'Cálculo',
  'Base de Datos',
  'Ingeniería Web'
];

const evaluaciones = ['E1', 'E2', 'EF', 'Proyecto', 'Tareas'];


const notasSimuladas = {
  'Álgebra': [5, 10, 20, 12, 16],         
  'Física': [16, 20, 18, 14, 10],         
  'Programación': [25, 15, 20, 15, 12],   
  'Cálculo': [10, 10, 20, 16, 20],          
  'Base de Datos': [21, 12, 20, 19, 18],   
  'Ingeniería Web': [13, 23, 14, 15, 15]    
};
const NotasPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <main className="notas">
        <h2>Notas por Materia</h2>
        <div className="tabla-container">
          <table className="tabla-notas">
            <thead>
              <tr>
                <th>Evaluación</th>
                {materias.map((materia, index) => (
                  <th key={index}>{materia}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {evaluaciones.map((evaluacion, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{evaluacion}</td>
                  {materias.map((materia, colIndex) => (
                    <td key={colIndex}>{notasSimuladas[materia][rowIndex]}</td>
                  ))}
                </tr>
              ))}
              <tr className="total-row">
                <td>Total</td>
                {materias.map((materia, index) => (
                  <td key={index}>
                    {notasSimuladas[materia].reduce((a, b) => a + b, 0)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="volver-btn-container">
          <button className="volver-btn" onClick={() => navigate('/dashboard')}>
            ← Volver al Dashboard
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default NotasPage;
