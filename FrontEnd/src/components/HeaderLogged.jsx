import '../styles/header.css';
import "../styles/responsive.css";

import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderLogged = () => {
  const navigate = useNavigate();
  const headerRef = useRef();
  let lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > lastScrollY.current) {
          headerRef.current.classList.add('header-hide');
        } else {
          headerRef.current.classList.remove('header-hide');
        }
        lastScrollY.current = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header" ref={headerRef}>
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
