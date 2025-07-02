import '../styles/header.css';
import "../styles/responsive.css";

import { useAuth } from '../providers/AuthProvider';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Header = () => {
  const { isUserLoggedIn } = useAuth();
  const [userInfo, setUserInfo] = useState({ username: "", contrasena: "" });
  const navigate = useNavigate(); 
  const headerRef = useRef();
  let lastScrollY = useRef(window.scrollY);

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (userInfo.username && userInfo.contrasena) {
      navigate('/dashboard');
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

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
            {
              !isUserLoggedIn ? (
                <>
                  <label htmlFor="username">Usuario: </label>
                  <input
                    type="text"
                    id="username"
                    name='username'
                    className='loginInput'
                    value={userInfo.username}
                    onChange={handleChange}
                  />
                  <label htmlFor="password">Contraseña: </label>
                  <input
                    type="password"
                    id="password"
                    name='contrasena'
                    className='loginInput'
                    value={userInfo.contrasena}
                    onChange={handleChange}
                  />
                  <input
                    type="button"
                    className='btn1'
                    value="Acceder"
                    onClick={handleSubmit}
                  />
                </>
              ) : (
                <li>Hola usuario</li>
              )
            }
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
