import '../styles/header.css';
import { useNavigate } from 'react-router-dom';

const HeaderLogged = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Universidad Gringa de Estados Unidos</h1>
        <nav>
          <ul className="nav-links">
            <li><button className='btn1' onClick={() => navigate('/notas')}>Ver Notas</button></li>
            <li><button className="btn1" onClick={() => alert("Registrar materia")}>Registrar Materia</button></li>
            <li><button className="btn1" onClick={() => navigate('/')}>Cerrar Sesión</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderLogged;
