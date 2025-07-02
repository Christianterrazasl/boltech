//puto el q me lea este comentario
import { useNavigate } from 'react-router-dom';
import Header from '../components/HeaderLogged'; 
import Footer from '../components/Footer';
import '../styles/dashboard.css';
import "../styles/responsive.css";

const materias = [
  'Algebra',
  'Física',
  'Programación',
  'Calculo',
  'Base de Datos',
  'Ingenieria Web'
];

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleClick = (materia) => {
    navigate(`/materia/${encodeURIComponent(materia)}`);
  };

  return (
    <>
      <Header />
      <main className="dashboard">
        <h2>Ingeniería de Sistemas</h2>
        <div className="subjects-container">
          {materias.map((materia, index) => (
            <div
              key={index}
              className="subject-card"
              onClick={() => handleClick(materia)}
            >
              {materia}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DashboardPage;
